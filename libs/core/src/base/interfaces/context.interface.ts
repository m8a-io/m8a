import { FastifyRequest, FastifyReply } from 'fastify'

export interface IFastifyReply extends FastifyReply {
  setCookie: (
    name: string,
    value: string,
    options?: {
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
  ) => this
}

export interface IFastifyRequest extends FastifyRequest {
  cookies: { [cookieName: string]: string }
  user: { userId: string }
}

export interface IContext {
  req: IFastifyRequest
  reply: IFastifyReply
}
