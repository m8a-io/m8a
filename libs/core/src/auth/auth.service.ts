import { IContext } from '../base/interfaces/context.interface'
import { UserService } from '../user/user.service'
import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import ms, { StringValue } from 'ms'
import { IJwtPayload } from './interfaces/jwt-payload.interface'
import { CacheService } from '../cache/cache.service'
import { AccessTokenDTO } from './refresh/dtos/access-token.dto'
import { EnvironmentVariables } from '../config/env/env.schema'
import { HashService } from '../user/hash.service'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom, map, switchMap, firstValueFrom } from 'rxjs'
import { UserAuthEntity, UserAuthService } from 'src/user'
import { KeycloakTokenData } from './types/keycloak-token-data'

import { LogoutDTO } from './refresh/dtos/logout.dto'

@Injectable()
export class AuthService {
  private axiosConfig = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Host: 'auth.m8a.io'
    },
    withCredentials: true
  }

  constructor (
    private readonly userService: UserService,
    private readonly userAuthService: UserAuthService,
    private readonly jwtService: JwtService,
    @Inject(CacheService) private cacheService: CacheService,
    private readonly envConfig: EnvironmentVariables,
    private readonly hashService: HashService,
    private readonly httpService: HttpService
  ) {}

  /**
   *
   * @param username
   * @param password
   * @param ctx
   * @returns a valid access token and the user's id, which is the AccessTokenDTO.
   */
  public async login (username: string, password: string, ctx: IContext): Promise<AccessTokenDTO> {
    let accessToken = ''
    const userId = ''

    const user = await this.userService.query({
      filter: {
        username: { eq: username }
      }
    })

    if (user.length === 0) {
      return { accessToken, userId }
    }

    const foundUser = user[0]
    const passWithSalt = this.hashService.getPasswordWithSalt(password, foundUser.salt)
    const valid = await this.hashService.verifyPassword(passWithSalt, foundUser.passwordHash)

    if (!valid) {
      return { accessToken, userId }
    }

    if (foundUser.status !== 'Registered') {
      return { accessToken, userId }
    }

    const payload: IJwtPayload = { sub: foundUser.id }

    accessToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.ACCESS_SECRET,
      expiresIn: this.envConfig.ACCESS_TTL
    })

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.REFRESH_SECRET,
      expiresIn: this.envConfig.REFRESH_TTL
    })

    await this.cacheService.set('refreshToken', foundUser.id, refreshToken)

    const ttlInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    ctx.reply.setCookie('refreshToken', refreshToken, {
      expires: new Date(Date.now() + ttlInMillis),
      httpOnly: true,
      path: '/',
      sameSite: 'none',
      secure: true
    })

    console.log('user logged in and sending Access Token and User Id ', accessToken, foundUser.id)
    return { accessToken, userId: foundUser.id }
  }

  /**
   *
   * @param token - the very short-lived access token from Keycloak
   * @param ctx
   * @returns a valid access token and the user's id, which is the AccessTokenDTO.
   */
  public async loginWithToken (token: string, ctx: IContext): Promise<AccessTokenDTO> {
    let accessToken = ''
    let refreshToken = ''
    let keycloakTokenData = {} as KeycloakTokenData

    const keyCloakInputData = {
      code: token,
      client_id: this.envConfig.CLIENT_ID,
      client_secret: this.envConfig.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'https://zeus-dev.m8a.io/callback',
      scope: 'openid'
    }

    console.log('loginWithToken ', token)
    // ping auth.m8a.io with access code, then get info about user from auth.m8a.io so it can be validated and we can retrieve "local" access and refresh tokens
    const keycloakIntrospectionResult = await lastValueFrom(
      this.httpService
        .post(
          'https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/token',
          keyCloakInputData,
          this.axiosConfig
        )
        .pipe(
          switchMap((response) => {
            keycloakTokenData = response.data
            return this.getIntrospectionData(response.data)
          })
        )
    )
    console.log('we are hitting the api!')
    // if user is not found, return empty accessToken and userId i.e. no login
    if (keycloakIntrospectionResult === undefined || keycloakIntrospectionResult.active === false) {
      return { accessToken, userId: '' }
    } // TODO: more than likely we aren't checking properly above, if the call errors out.

    // temp only: needed to create user in org database
    // if (user.length === 0) {
    //   orgUser = await this.userService.createOne({
    //     username: userInfo.preferred_username,
    //     email: userInfo.email,
    //     firstName: userInfo.given_name,
    //     lastName: userInfo.family_name,
    //     m8aAuthId: userInfo.sub,
    //     status: 'Registered'
    //   })
    // }

    console.log('keycloak sub ', keycloakIntrospectionResult)

    const userAuthData: UserAuthEntity = {
      accessToken: keycloakTokenData.access_token,
      expiresIn: keycloakTokenData.expires_in,
      refreshExpiresIn: keycloakTokenData.refresh_expires_in,
      refreshToken: keycloakTokenData.refresh_token,
      tokenType: keycloakTokenData.token_type,
      idToken: keycloakTokenData.id_token
    }

    // check org database for user

    const [orgUser] = await this.userAuthService.query({
      filter: {
        m8aAuthId: { eq: keycloakIntrospectionResult.sub } // user's id in Keycloak
      }
    })

    // update user with auth data from keycloak and setup orgUser for update
    orgUser.userAuthData = userAuthData
    const updateUserId = orgUser.id
    delete orgUser._id
    delete orgUser.id

    // update user with auth data
    await this.userAuthService.updateOne(updateUserId, orgUser)

    // if user is not found in org database, no login
    if (orgUser === undefined) {
      return { accessToken, userId: '' }
    }
    // 0d62ce97-46d6-4dbd-9a52-8f821e35c5f0"
    // if user is found, generate new access token and refresh token
    const payload: IJwtPayload = { sub: updateUserId }
    accessToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.ACCESS_SECRET,
      expiresIn: this.envConfig.ACCESS_TTL
    })

    refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.REFRESH_SECRET,
      expiresIn: this.envConfig.REFRESH_TTL
    })

    this.cacheService.set('refreshToken', updateUserId, refreshToken)

    const ttlInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    ctx.reply.setCookie('refreshToken', refreshToken, {
      expires: new Date(Date.now() + ttlInMillis),
      httpOnly: true,
      path: '/',
      sameSite: 'none',
      secure: true
    })

    console.log('user logged in via Keycloak, switch to application session - send Access Token and User Id')
    return { accessToken, userId: updateUserId }
  }

  /**
   *
   * @param ctx
   * @returns a nulled out AccessTokenDTO
   */
  public async logout (ctx: IContext): Promise<LogoutDTO> {
    const token = ctx.req.cookies.refreshToken
    let userId = ctx.req.user.userId

    const user = await this.userAuthService.findById(userId)
    const idToken = user.userAuthData.idToken

    ctx.reply.setCookie('refreshToken', '', {
      expires: new Date(Date.now()),
      httpOnly: true,
      path: '/', // TODO: set path to refresh
      sameSite: 'none',
      secure: true
    })

    this.cacheService.revoke(token, userId)
    userId = ''
    ctx.req.cookies.refreshToken = ''
    console.log('logged out user')
    return { idToken }
  }

  private async getIntrospectionData (keyCloakData: KeycloakTokenData) {
    console.log('data from keycloak: ', keyCloakData)

    const keyCloakInputData = {
      token: keyCloakData.access_token,
      client_id: this.envConfig.CLIENT_ID,
      client_secret: this.envConfig.CLIENT_SECRET
    }

    return firstValueFrom(
      this.httpService
        .post(
          'https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/token/introspect',
          keyCloakInputData,
          this.axiosConfig
        )
        .pipe(map((response) => response.data))
    )
  }
}
