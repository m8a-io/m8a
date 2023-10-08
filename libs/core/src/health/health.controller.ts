/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common'
import { Public } from 'src/auth'

@Public()
@Controller()
export class HealthController {
  @Get('/health')
  healthCheck (): string {
    return 'ok'
  }
}
