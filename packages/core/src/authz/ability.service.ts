import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, Subject } from '@casl/ability'
import { Injectable } from '@nestjs/common'

export interface RawRule {
  action: string | string[]
  subject?: string | string[]
  /** an array of fields to which user has (or not) access */
  fields?: string[]
  /** an object of conditions which restricts the rule scope */
  conditions?: any
  /** indicates whether rule allows or forbids something */
  inverted?: boolean
  /** message which explains why rule is forbidden */
  reason?: string
}

type Abilities = [string, Subject]
export type AppAbility = Ability<Abilities>
const AppAbility = Ability as AbilityClass<AppAbility>

@Injectable()
export class AbilityService {

  private rule = new Ability([
    {
      action: 'read',
      subject: 'helloWorld'
    },
    {
      action: 'read',
      subject: 'me'
    },
    {
      action: 'read',
      subject: 'logout'
    }

  ])

  defineRulesFor (userId: string) {
    const { /*can, cannot,*/ build } = new AbilityBuilder(Ability as AbilityClass<AppAbility>)
    console.log('userId: ', userId)
    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      //detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>
    })
  }
  
  getRulesForUser (userId: string): AppAbility {
    console.log('getting rules for user', userId)
    return this.rule
  }
}