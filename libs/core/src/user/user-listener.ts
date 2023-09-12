import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

@Injectable()
export class UserHelloWorldListener {
  @OnEvent('hello.world')
  handleHelloWorldEvent () {
    // handle and process "OrderCreatedEvent" event
    console.log('Hello World Event was fired!')
  }
}
