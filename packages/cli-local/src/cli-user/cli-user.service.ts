import { UserService } from '@m8a/core'
import { UserDTO } from '@m8a/core'
import { Injectable } from '@nestjs/common'
import { DevLoggerService } from '@m8a/logger'
import { HashService } from '@m8a/core'

@Injectable()
export class CliUserService {
  constructor(
    private readonly userService: UserService,
    private readonly logService: DevLoggerService,
    private readonly hashService: HashService
  ) { }

  async createInitialUser (): Promise<UserDTO | boolean> {
    const tempUser = await this.userService.query({
      paging: {
        limit: 1
      }
    })

    if (tempUser.length > 0) {
      this.logService.warn("Oops! The database isn't empty. Aborting...")
      return false
    }

    const tempPassword = (Math.random() + 1).toString(36).substring(2);
    const passWithSalt = this.hashService.getPasswordWithSalt(tempPassword)
    const salt = await this.hashService.getSalt(passWithSalt)
    const hashedPassword = await this.hashService.hashPassword(passWithSalt)

    const initialUser = await this.userService.createOne({
      firstName: 'system',
      lastName: 'user',
      username: 'admin@m8a.io.admin',
      email: 'admin@m8a.io.admin',
      salt,
      password: hashedPassword,
      status: 'Registered',
      createdBy: null,
      modifiedBy: null,
      createdAt: null,
      modifiedAt: null
    })

    this.logService.log('Initial system user created. ')
    return initialUser
  }

  async updateInitialUser (user: UserDTO): Promise<void> {
    if (!user) return
    await this.userService.updateOne(
      user.id,
      {
        createdBy: user.id,
        modifiedBy: user.id
      }
    )
    this.logService.log('Initial user updated and ready to use.')
  }
}

