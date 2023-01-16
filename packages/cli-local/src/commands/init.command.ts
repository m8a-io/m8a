import { Command, CommandRunner, InquirerService, Question, QuestionSet, Option, ValidateFor, Help } from 'nest-commander'
import { Connection } from 'mongoose'
import { getConnectionToken } from '@m8a/nestjs-typegoose'
import { Inject } from '@nestjs/common'
import { DevLoggerService } from '@m8a/logger'
import { CliUserService } from '../cli-user/cli-user.service'
import { UserDTO } from '@m8a/core'
import { InitConfigService } from '../init-config/init-config.service'

@Command({
  name: 'init',
  description: `The "init" command will do initial set up the databases for local development.`
})
export class InitCommand implements CommandRunner {
  constructor(
    private readonly logService: DevLoggerService,
    @Inject(getConnectionToken()) private readonly connection: Connection,
    private readonly userService: CliUserService,
    private readonly inquirer: InquirerService,
    private readonly initConfigService: InitConfigService
  ) {}

  async run (input: string[], options: Record<string, any>): Promise<void> {
    this.logService.addLine()

    if (input.length > 0) {
      this.logService.error("You've entered something I unfortunately don't understand. Please try again.")
      process.exit(1)
    }

    if (options.reset) {
      const doInit = await this.inquirer.ask<{ init: string }>('init', undefined)
      if (['N', 'n'].includes(doInit.init)) {
        this.logService.log('Aborting....')
        process.exit(1)
      } else {
        this.connection.dropDatabase()
      }
    }

    this.logService.log('Attempting to add initial configuration data.')

    await this.initConfigService.createInitialConfig()

    this.logService.log('Attempting to add the initial system user to the database.')
    const user = await this.userService.createInitialUser()
    if (user) {
      await this.userService.updateInitialUser(user as UserDTO)
      this.logService.log('Databases are initialized!')
    }

    process.exit(1)
  }

  @Option({
    flags: '-r, --reset',
    description: 'Resets the dev databases, should they not be empty. Use with care!'
  })
  parseShell (val: string) {
    return val;
  }
}


@QuestionSet({ name: 'init' })
export class InitQuestions {
  @Question({
    message: 'm8a CLI - Are you sure you want to reset the dev databases?(y/N)',
    name: 'init'
  })
  parseReply (val: string) {
    return val;
  }

  @ValidateFor({ name: 'init' })
  validate (input: string) {
    const inputRegex = /^Y|y|n|N/
    return inputRegex.test(input) || 'm8a CLI - You entered the wrong letter.'
  }
}
