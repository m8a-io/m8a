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
import { catchError, firstValueFrom, of } from 'rxjs'

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
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
  async login (username: string, password: string, ctx: IContext): Promise<AccessTokenDTO> {
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
    const valid = await this.hashService.verifyPassword(passWithSalt, passWithSalt)

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
   * @param token
   * @param ctx
   * @returns a valid access token and the user's id, which is the AccessTokenDTO.
   */
  async loginWithToken (token: string, ctx: IContext): Promise<AccessTokenDTO> {
    let accessToken = ''
    let refreshToken = ''
    let userId = ''

    const keyCloakData = {
      code: token,
      client_id: this.envConfig.CLIENT_ID,
      client_secret: this.envConfig.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'https://zeus-dev.m8a.io/callback'
    }

    const axiosConfig = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true
    }

    console.log('loginWithToken ', token)
    // ping auth.m8a.io with access code so it can be validated and we can retrieve access and refresh tokens
    const { data } = await firstValueFrom(
      this.httpService
        .post('https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/token', keyCloakData, axiosConfig)
        .pipe(
          catchError((error) => {
            console.error('error from m8a Auth: ', error.response.data)
            return of(error)
          })
        )
    )

    console.log('data.refresh_token ', data.refresh_token)
    // if user is not found, return empty accessToken and userId
    if (data.refresh_token === undefined) {
      return { accessToken, userId }
    }
    accessToken = data.access_token
    refreshToken = data.refresh_token
    userId = '1'

    await this.cacheService.set('refreshToken', userId, refreshToken)
    console.log('set cached refresh token')

    const ttlInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    ctx.reply.setCookie('refreshToken', refreshToken, {
      expires: new Date(Date.now() + ttlInMillis),
      httpOnly: true,
      path: '/',
      sameSite: 'none',
      secure: true
    })
    console.log('set cookie with refreshToken ', refreshToken)

    // get info about user from auth.m8a.io

    // check org database for user

    // TODO: decide on registration flow for new users

    // if user is not found in org database, error out with missing user error

    // if user is found, generate new access token and refresh token

    // const user = await this.userService.query({

    //   filter: {
    //     username: { eq: username }
    //   }
    // })

    // if (user.length === 0) {
    //   return { accessToken, userId }
    // }

    // const foundUser = user[0]
    // const passWithSalt = this.hashService.getPasswordWithSalt(password, foundUser.salt)
    // const valid = await this.hashService.verifyPassword(passWithSalt, passWithSalt)

    // if (!valid) {
    //   return { accessToken, userId }
    // }

    // if (foundUser.status !== 'Registered') {
    //   return { accessToken, userId }
    // }

    // const payload: IJwtPayload = { sub: foundUser.id }
    // accessToken = await this.jwtService.signAsync(payload, {
    //   secret: this.envConfig.ACCESS_SECRET,
    //   expiresIn: this.envConfig.ACCESS_TTL
    // })

    // refreshToken = await this.jwtService.signAsync(payload, {
    //   secret: this.envConfig.REFRESH_SECRET,
    //   expiresIn: this.envConfig.REFRESH_TTL
    // })

    // this.cacheService.set('refreshToken', foundUser.id, refreshToken)

    // const ttlInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    // ctx.res.setCookie('refreshToken', refreshToken, {
    //   expires: new Date(Date.now() + ttlInMillis),
    //   httpOnly: true,
    //   path: '/',
    //   sameSite: 'none',
    //   secure: true
    // })

    console.log("user logged in and we've gotten an Access Token and Refresh Token from Keycloak")
    return { accessToken, userId }
  }

  /**
   *
   * @param ctx
   * @returns a nulled out AccessTokenDTO
   */
  async logout (ctx: IContext): Promise<AccessTokenDTO> {
    const accessToken = ''
    const token = ctx.req.cookies.refreshToken
    let userId = ctx.req.user.userId

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
    return { accessToken, userId }
  }

  async getCachedToken (ctx): Promise<string> {
    console.log('hit getCachedToken')
    return (await this.cacheService.get('refreshToken', '1')) as string
  }
}
