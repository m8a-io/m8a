export type KeycloakIntrospectionResult = {
  exp: number
  iat: number
  auth_time: number
  jti: string
  iss: string
  aud: string[]
  sub: string
  typ: string
  azp: string
  session_state: string
  name: string
  given_name: string
  family_name: string
  preferred_username: string
  email: string
  email_verified: boolean
  acr: string
  realm_access: { roles: string[] }
  resource_access: { [key: string]: { roles: string[] } }
  scope: string
  sid: string
  client_id: string
  username: string
  active: boolean
}
