import { Context, Mutation, Resolver } from '@nestjs/graphql'
import { IContext } from '../base/interfaces/context.interface'
import { AuthService } from './auth.service'
import { AccessTokenDTO } from './refresh/dtos/access-token.dto'

@Resolver()
export class LogoutResolver {
  constructor (private readonly authService: AuthService) {}

  /**
   *
   * @param ctx injected ctx object
   * @returns AccessTokenDTO, but nulled out and meaningless
   */
  @Mutation(() => AccessTokenDTO, {
    nullable: true,
    description: 'The logout mutation for the logout process.'
  })
  async logout (@Context() ctx: IContext): Promise<AccessTokenDTO> {
    const accessToken = await this.authService.logout(ctx)
    return accessToken
  }
}
