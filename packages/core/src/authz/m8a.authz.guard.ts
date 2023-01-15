import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { IS_PUBLIC_KEY } from '../auth/decorators/public.decorator'
import { AbilityService } from './ability.service'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class m8aAuthzGuard implements CanActivate {
  private userId!: string
  private fieldName!: string

  constructor (
    private reflector: Reflector,
    private abilityService: AbilityService) {
  }

  async canActivate (context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) {
      return true
    }

    const ctx = GqlExecutionContext.create(context)

    if (ctx.getContext()) {
      const { user } = ctx.getContext().req
      const { fieldName } = ctx.getInfo()
      console.log('ctx info field nodes: ', ctx.getInfo().fieldNodes)
      console.log('ctx info: ', ctx.getContext())
      user ? this.userId = user.userId : this.userId = ''
      this.fieldName = fieldName
    }

    console.log('this is the graphql user: ', this.userId)
    console.log('this is the fieldName: ', this.fieldName)
    const userAbility = this.abilityService.getRulesForUser(this.userId)
    return userAbility.can('read', this.fieldName)
  }
}
