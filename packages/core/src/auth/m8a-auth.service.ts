import { Injectable, Res, Req, Inject } from '@nestjs/common'
import { IFastifyRequest, IFastifyReply, IContext } from '../base/interfaces/context.interface'
import { AccessTokenDTO } from './refresh'
import { HashService, UserService } from '../user'
import { CacheService } from '../cache'
import { EnvironmentVariables } from '../config/env/env.schema'
import { IJwtPayload } from './interfaces/jwt-payload.interface'
import ms, { StringValue } from 'ms'

@Injectable()
export class M8aAuthService {
  constructor (
    private readonly userService: UserService,
    @Inject(CacheService) private cacheService: CacheService,
    private readonly envConfig: EnvironmentVariables,
    private readonly hashService: HashService
  ) {}

  /**
   *
   * @param username
   * @param password
   * @param ctx
   * @returns a valid access token and the user's id, which is the AccessTokenDTO.
   */
  async login (code: string, sessionStatus: string, ctx: IContext): Promise<AccessTokenDTO> {
    const accessToken = ''
    const userId = ''
    console.log('code: ', code)
    console.log('sessionStatus: ', sessionStatus)
    //   const user = await this.userService.query({
    //     filter: {
    //       username: { eq: username }
    //     }
    //   })

    //   if (user.length === 0) {
    //     return { accessToken, userId }
    //   }

    //   const foundUser = user[0]
    //   const passWithSalt = this.hashService.getPasswordWithSalt(password, foundUser.salt)
    //   const valid = await this.hashService.verifyPassword(passWithSalt, passWithSalt)

    //   if (!valid) {
    //     return { accessToken, userId }
    //   }

    //   if (foundUser.status !== 'Registered') {
    //     return { accessToken, userId }
    //   }

    //   const payload: IJwtPayload = { sub: foundUser.id }

    //   accessToken = await this.jwtService.signAsync(payload, {
    //     secret: this.envConfig.ACCESS_SECRET,
    //     expiresIn: this.envConfig.ACCESS_TTL
    //   })

    //   const refreshToken = await this.jwtService.signAsync(payload, {
    //     secret: this.envConfig.REFRESH_SECRET,
    //     expiresIn: this.envConfig.REFRESH_TTL
    //   })

    //   this.cacheService.set('refreshToken', foundUser.id, refreshToken)

    //   const ttlInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    //   ctx.res.setCookie('refreshToken', refreshToken, {
    //     expires: new Date(Date.now() + ttlInMillis),
    //     httpOnly: true,
    //     path: '/',
    //     sameSite: 'none',
    //     secure: true
    //   })

    //   console.log('user logged in and sending Access Token and User Id ', accessToken, foundUser.id)
    return { accessToken, userId }
  }
}
