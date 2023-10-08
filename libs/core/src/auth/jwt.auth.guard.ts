import { ExecutionContext, Injectable, Inject } from '@nestjs/common'
import { FastifyRequest } from 'fastify'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { IS_PUBLIC_KEY } from './decorators/public.decorator'
import { GraphQLError } from 'graphql'
import { Observable } from 'rxjs'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  @Inject(Reflector) private reflector!: Reflector
  constructor () {
    super()
  }

  getRequest (context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRequest (err: any, user: any) {
    if (err || !user) {
      // return Promise.reject(
      //   new GraphQLError(
      //     'Your access is denied. If you think there is an error, please contact your administrator.',
      //     {
      //       extensions: {
      //         code: 'UNAUTHORIZED',
      //         myExtension: 'm8a-error-code-1003'
      //       }
      //     }
      //   )
      // )
    }

    return user
  }

  canActivate (context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) {
      return true
    }

    return super.canActivate(context)
  }
}
