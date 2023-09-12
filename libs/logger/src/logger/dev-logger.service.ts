import { Injectable, ConsoleLogger, ConsoleLoggerOptions } from '@nestjs/common'
import { blue, white, red, yellow, green } from 'chalk-v2'
import * as util from 'util'

@Injectable()
export class DevLoggerService extends ConsoleLogger {
  private prefix = ''
  private sep = blue('-')
  private format = util.format

  constructor (context: string, options?: ConsoleLoggerOptions) {
    super()
    this.context = context
    this.options = options
  }

  public log (...args: any[]): void {
    let msg = this.format.apply(this.format, args)
    msg = `${white(this._getFullPrefix())} ${this.sep} ${msg}`
    console.log(msg)
    // super.log.apply(this, msg);
  }

  public error (...args: any[]) {
    if (args[0] instanceof Error) args[0] = args[0].message.trim()
    const msg = this.format.apply(this.format, args)
    console.error(red(this._getFullPrefix()), this.sep, red('ERROR ⚠️ : '), msg)
  }

  public warn (...args: any[]) {
    const msg = this.format.apply(this.format, args)
    console.error(yellow(this._getFullPrefix()), this.sep, yellow('WARNING 🤔 :'), msg)
  }

  public success (...args: any[]) {
    const msg = this.format.apply(this.format, args)
    console.error(green(this._getFullPrefix()), this.sep, green('SUCCESS ✔️ : '), msg)
  }

  public verbose (...args: any[]) {
    const msg = this.format.apply(this.format, args)
    console.error(white(this._getFullPrefix()), this.sep, msg)
  }

  public addLine () {
    console.log()
  }

  public addLines (linesToAdd: number) {
    for (let i = 0; i < linesToAdd; i++) {
      console.log()
    }
  }

  public logPlain (...args: any[]) {
    console.log(args)
  }

  private _getFullPrefix (): string {
    this.prefix = 'm8a CLI'
    return this.options !== undefined && this.options.timestamp
      ? `${this.prefix} ${this.sep} [${this._formatDate(new Date())}]`
      : this.prefix
  }

  private _formatDate (date_ob: Date): string {
    const day = this._IntTwoChars(date_ob.getDate())
    const month = this._IntTwoChars(date_ob.getMonth() + 1)
    const year = date_ob.getFullYear()
    const hours = this._IntTwoChars(date_ob.getHours())
    const minutes = this._IntTwoChars(date_ob.getMinutes())
    return `${year}-${month}-${day} ${hours}:${minutes}`
  }

  private _IntTwoChars (i: number) {
    return `0${i}`.slice(-2)
  }
}
