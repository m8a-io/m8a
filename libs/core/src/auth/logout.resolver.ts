import { Context, Mutation, Resolver } from '@nestjs/graphql'
import { IContext } from '../base/interfaces/context.interface'
import { AuthService } from './auth.service'
import { LogoutDTO } from './refresh/dtos/logout.dto'

@Resolver()
export class LogoutResolver {
  constructor (private readonly authService: AuthService) {}

  /**
   *
   * @param ctx injected ctx object
   * @returns LogoutDTO holding the id token for the id_token_hint for Keycloak
   */
  @Mutation(() => LogoutDTO, {
    nullable: true,
    description: 'The logout mutation for the logout process.'
  })
  async logout (@Context() ctx: IContext): Promise<LogoutDTO> {
    const idToken = await this.authService.logout(ctx)
    return idToken
  }
}
