import { FastifyRequest, FastifyReply } from 'fastify'

interface CookieSerializeOptions {
  domain?: string
  encode?(val: string): string
  expires?: Date
  httpOnly?: boolean
  maxAge?: number
  path?: string
  sameSite?: boolean | 'lax' | 'strict' | 'none'
  secure?: boolean
  signed?: boolean
}

type setCookieWrapper = (name: string, value: string, options?: CookieSerializeOptions) => FastifyReply

export interface IFastifyReply {
  setCookie: setCookieWrapper
  clearCookie(name: string, options?: CookieSerializeOptions): FastifyReply
}

export interface IFastifyRequest extends FastifyRequest {
  cookies: { [cookieName: string]: string }
  unsignCookie(value: string): {
    valid: boolean
    renew: boolean
    value: string | null
  }
  user: { userId: string }
}

export interface IContext {
  req: IFastifyRequest
  reply: IFastifyReply
}
