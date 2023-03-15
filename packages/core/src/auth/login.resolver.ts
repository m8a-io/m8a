import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { IContext } from "../base/interfaces/context.interface";
import { AuthService } from "./auth.service";
import { AccessTokenDTO } from "./refresh/dtos/access-token.dto";
import { Public } from "./decorators/public.decorator";

@Resolver()
export class LoginResolver {
  constructor(private readonly authService: AuthService) {}

  /**
   *
   * @param username
   * @param password
   * @param ctx
   * @returns AccessTokenDTO
   */
  @Public()
  @Mutation(() => AccessTokenDTO, {
    nullable: true,
    description: "The login mutation for the login process.",
  })
  async login(
    @Args("username") username: string,
    @Args("password") password: string,
    @Context() ctx: IContext
  ): Promise<AccessTokenDTO> {
    const result = await this.authService.login(username, password, ctx);
    return result;
  }
}
