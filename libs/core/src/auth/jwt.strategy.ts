import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { EnvironmentVariables } from '../config/env/env.schema'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor (private readonly envConfig: EnvironmentVariables) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envConfig.ACCESS_SECRET
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate (payload: any) {
    return { userId: payload.sub }
  }
}
