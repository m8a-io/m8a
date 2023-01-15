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


@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(CacheService) private cacheService: CacheService,
    private readonly envConfig: EnvironmentVariables,
    private readonly hashService: HashService
  ) { }

  /**
   *
   * @param username
   * @param password
   * @param ctx
   * @returns a valid access token and the user's id, which is the AccessTokenDTO.
   */
  async login (
    username: string,
    password: string,
    ctx: IContext): Promise<AccessTokenDTO> {
    let accessToken = ''
    let userId = ''

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
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.REFRESH_SECRET,
      expiresIn: this.envConfig.REFRESH_TTL
    })

    this.cacheService.set('refreshToken', foundUser.id, refreshToken)

    const ttlInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    ctx.res.setCookie(
      'refreshToken',
      refreshToken,
      {
        expires: new Date(Date.now() + ttlInMillis),
        httpOnly: true,
        path: '/',
        sameSite: 'none',
        secure: true
      }
    )

    console.log('user logged in and sending Access Token and User Id ', accessToken, foundUser.id)
    return { accessToken, userId: foundUser.id }
  }

  /**
   *
   * @param ctx
   * @returns a nulled out AccessTokenDTO
   */
  async logout (ctx: IContext): Promise<AccessTokenDTO> {
    let accessToken = ''
    const token = ctx.req.cookies.refreshToken
    let userId = ctx.req.user.userId

      ctx.res.setCookie(
      'refreshToken',
      '',
      {
        expires: new Date(Date.now()),
        httpOnly: true,
        path: '/',  // TODO: set path to refresh
        sameSite: 'none',
        secure: true
      }
    )

    this.cacheService.revoke(token, userId)
    userId = ''
    ctx.req.cookies.refreshToken = ''
    console.log('logged out user')
    return { accessToken, userId }
  }
}
