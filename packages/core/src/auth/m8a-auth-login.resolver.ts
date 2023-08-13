import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { IContext } from '../base/interfaces/context.interface'
import { M8aAuthService } from './m8a-auth.service'
import { AccessTokenDTO } from './refresh/dtos/access-token.dto'
import { Public } from './decorators/public.decorator'

@Resolver()
export class M8aAuthLoginResolver {
  constructor (private readonly m8aAuthService: M8aAuthService) {}

  /**
   *
   * @param code
   * @param sessionStatus
   * @param ctx
   * @returns AccessTokenDTO
   */
  @Public()
  @Mutation(() => AccessTokenDTO, {
    nullable: true,
    description: 'The login mutation for the m8a SSO login process.'
  })
  async m8aAuthLogin (
    @Args('code') code: string,
    @Args('sessionStatus') sessionStatus: string,
    @Context() ctx: IContext
  ): Promise<AccessTokenDTO> {
    return await this.m8aAuthService.login(code, sessionStatus, ctx)
  }
}
