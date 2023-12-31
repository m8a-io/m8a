import { IContext } from '../base/interfaces/context.interface'
import { CRUDResolver, PagingStrategies } from '@ptc-org/nestjs-query-graphql'
import { Args, Resolver, Query, Context } from '@nestjs/graphql'
import { UserDTO } from './dtos/user.dto'
import { UserInputDTO } from './dtos/user.input.dto'
import { UserService } from './user.service'
import { Public } from '../auth/decorators/public.decorator'

@Resolver(() => UserDTO)
export class UserResolver extends CRUDResolver(UserDTO, {
  pagingStrategy: PagingStrategies.OFFSET,
  aggregate: { enabled: true },
  CreateDTOClass: UserInputDTO,
  UpdateDTOClass: UserInputDTO
}) {
  constructor (private readonly userService: UserService) {
    super(userService)
  }

  @Query(() => UserDTO)
  async findUserByIdCustom (@Args('id') id: string): Promise<UserDTO | undefined> {
    const user = await this.userService.getById(id)
    return user
  }

  @Query(() => String)
  async helloWorld (): Promise<string> {
    // const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    // await delay(3000)
    return this.userService.helloWorld()
  }

  @Public()
  @Query(() => String)
  async helloWorld2 (@Args('input', { nullable: true }) input: string): Promise<string> {
    console.log('input: ', input)
    return `${input}` || 'Input was empty!!!'
  }

  @Query(() => UserDTO)
  async me (@Context() ctx: IContext): Promise<UserDTO | undefined> {
    console.log('me requested')
    console.log('ctx.req.user.userId: ', ctx.req.user.userId)
    const user = await this.userService.findById(ctx.req.user.userId)
    return user
  }
}
