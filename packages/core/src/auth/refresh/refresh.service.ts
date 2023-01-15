import { Inject, Injectable, Res, Req } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IJwtPayload } from '../interfaces/jwt-payload.interface'
import { CacheService } from '../../cache/cache.service'
import { AccessTokenDTO } from './dtos/access-token.dto'
import { IFastifyRequest, IFastifyReply } from '../../base/interfaces/context.interface'
import { EnvironmentVariables } from '../../config/env/env.schema'
import ms, { StringValue } from 'ms'

@Injectable()
export class RefreshService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(CacheService) private cacheService: CacheService,
    private readonly envConfig: EnvironmentVariables
  ) { }

  async refresh (
    @Req() request: IFastifyRequest,
    @Res() reply: IFastifyReply
  ): Promise<AccessTokenDTO> {
    const refreshToken = request.cookies['refreshToken']
    console.log('refreshToken cookie accepted', request.cookies)
    const validToken = this.jwtService.verify(refreshToken, {
      secret: this.envConfig.REFRESH_SECRET
    })
    console.log('token is valid? ', validToken)
    if (!validToken) {
      return { accessToken: '', userId: '' }
    }

    const storedToken = await this.cacheService.get('refreshToken', validToken.sub) as string
    
    console.log('checking stored token against cookiefied token', storedToken ? storedToken.slice(-8) : '',
      refreshToken ? refreshToken.slice(-8) : '')
    
    if (refreshToken !== storedToken) return { accessToken: '', userId: '' }

    const payload: IJwtPayload = { sub: validToken.sub }

    const newAccessToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.ACCESS_SECRET,
      expiresIn: this.envConfig.ACCESS_TTL
    })

    const newRefreshToken = await this.jwtService.signAsync(payload, {
      secret: this.envConfig.REFRESH_SECRET,
      expiresIn: this.envConfig.REFRESH_TTL
    })

    await this.cacheService.set('refreshToken', validToken.sub, newRefreshToken)

    const timeInMillis = ms(this.envConfig.REFRESH_TTL as StringValue)

    reply.setCookie(
      'refreshToken',
      newRefreshToken,
      {
        expires: new Date(Date.now() + timeInMillis),
        httpOnly: true,
        path: '/',
        sameSite: 'none',
        secure: true
      }
    )
    console.log('refreshed again via refresh, new refreshToken', newRefreshToken ? newRefreshToken.slice(-8) : '' )
    return { accessToken: newAccessToken, userId: validToken.sub }
  }
}
