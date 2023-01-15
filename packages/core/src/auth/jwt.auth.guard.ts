import { ExecutionContext, Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { IS_PUBLIC_KEY } from './decorators/public.decorator'
import { ApolloError } from 'apollo-server-errors'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  @Inject(Reflector) private reflector!: Reflector
  constructor() {
    super()
  }

  getRequest (context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
  
  handleRequest(err: any, user: any, info: any, context: any, status: any) {

    if (err || !user) {
      throw new ApolloError(
        'Your access is denied. If you think there is an error, please contact your administrator.',
        '1002'
      )
    }

    // console.log('user passed handler token good')
    return user
  }

  canActivate (context: ExecutionContext): any {
    
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
