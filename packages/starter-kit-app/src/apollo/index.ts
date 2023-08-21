/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ApolloClientOptions,
  createHttpLink,
  InMemoryCache,
  from,
  makeVar
  /* split */
} from '@apollo/client/core'
import type { BootFileParams } from '@quasar/app-vite'
import { setContext } from '@apollo/client/link/context'
import { LocalStorage } from 'quasar'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwt_decode from 'jwt-decode'
import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'

interface DecodedToken {
  foo: string
  exp: number
  iat: number
}

export const userLoggedInVar = makeVar(false)

const retryLink = new RetryLink({
  attempts: {
    max: 2
  }
})

// set network connectivity flat to true, to assume connectivity is working
LocalStorage.set('networkOk', true)

export function getClientOptions(options?: Partial<BootFileParams<unknown>>): ApolloClientOptions<unknown> {
  const authLink = setContext(async () => {
    const token: string | null = await LocalStorage.getItem('token')
    if (token) {
      userLoggedInVar(true)
    }
    return {
      headers: {
        authorization: token ? `bearer ${token}` : ''
      }
    }
  })

  const refreshLink = new TokenRefreshLink({
    accessTokenField: 'accessToken',
    // No need to refresh if token exists and is still valid
    isTokenValidOrUndefined: async (): Promise<boolean> => {
      const token: string | null = LocalStorage.getItem('token')
      const userId: string | null = LocalStorage.getItem('userId')
      // No need to refresh if we don't have a userId
      if (!userId) {
        return true
      }

      if (token) {
        const decodedToken: DecodedToken = jwt_decode(token)
        if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
          return true
        }
      }
      return false
    },
    fetchAccessToken: async () => {
      const userId: string | null = LocalStorage.getItem('userId')
      if (!userId) {
        // no need to refresh if userId is not defined
        return null
      }
      // Use fetch to access the refreshUserToken api
      const response = await fetch('https://zeus-dev-api.m8a.io/refresh', {
        // TODO - set env vars for this
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include'
      })
      return response.json()
    },
    handleFetch: (newToken) => {
      // save new authentication token to state
      LocalStorage.set('token', newToken)
      userLoggedInVar(true)
    },
    handleResponse: () => (response: { accessToken: string; userId: string }) => {
      if (!response) {
        return { accessToken: null }
      }
      LocalStorage.set('token', response.accessToken)
      userLoggedInVar(true)
      return { accessToken: response.accessToken }
    },
    handleError: (error) => {
      console.error('Cannot refresh access token:', error)
      userLoggedInVar(false)
      LocalStorage.remove('token')
      LocalStorage.remove('userId')
      console.log(options)
      // void options?.router?.push('/')
    }
  })

  const graphQLLink = createHttpLink({
    uri: 'https://zeus-dev-api.m8a.io/graphql', // TODO: need to get from .env later
    credentials: 'include', // TODO: need to turn on later to harden
    fetch
  })

  // const authErrorLink = onError(({ networkError, graphQLErrors, forward, operation}) => {

  //   if (graphQLErrors) {
  //     graphQLErrors.forEach(({ message, path }) => {
  //       console.log(
  //         // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //         `[GraphQL error]: Message: ${message}, Path: ${path}`
  //       )
  //       if (message.includes('Invalid Token')) {
  //         userLoggedInVar(false)
  //         console.log('no token available')
  //         forward(operation)
  //       }
  //     })

  //     if (networkError) {
  //       console.log(`[Network error name]: ${networkError.name}`)
  //       console.log(`[Network error message]: ${networkError.message}`)
  //       if (
  //         networkError.name === 'ServerError'
  //       ) {
  //          options !== undefined ? options.router?.push('/') : forward(operation)
  //       }
  //   }
  //   }
  // })

  // TODO: holding for ws inclusion later - now SSE with Yoga - need to check on that
  // const authToken = localStorage.getItem('token');
  // const wsLink = new WebSocketLink({
  //   uri: websocketApiUrl,
  //   options: {
  //     timeout: 60000,
  //     reconnect: true,
  //     connectionParams: {
  //       authorization: authToken,
  //     },
  //   },
  // });

  // Will need to change this for Mercurius ws
  // wsLink.subscriptionClient.maxConnectTimeGenerator.duration = () =>
  //   wsLink.subscriptionClient.maxConnectTimeGenerator.max;
  //
  // const terminatingLink = split(
  //   ({ query }) => {
  //     const { kind, operation } = getMainDefinition(query)
  //     return kind === 'OperationDefinition' && operation === 'subscription'
  //   },
  //   wsLink,
  //   uploadLink
  // )

  // const terminatingLink = split(
  //   () => localStorage.getItem('token') !== null,
  //   from([authLink, graphQLLink]),
  //   from([refreshTokenLink])
  // )

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    LocalStorage.set('networkOk', false)
    console.error(graphQLErrors)
    console.error(networkError)
  })

  return <ApolloClientOptions<unknown>>Object.assign(
    // General options.
    <ApolloClientOptions<unknown>>{
      link: from([refreshLink, authLink, retryLink, graphQLLink, errorLink]),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              userLoggedIn: {
                read() {
                  return userLoggedInVar()
                }
              }
            }
          }
        }
      })
    },

    // Specific Quasar mode options.
    process.env.MODE === 'spa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'ssr'
      ? {
          //
        }
      : {},
    process.env.MODE === 'pwa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'bex'
      ? {
          //
        }
      : {},
    process.env.MODE === 'cordova'
      ? {
          //
        }
      : {},
    process.env.MODE === 'capacitor'
      ? {
          //
        }
      : {},
    process.env.MODE === 'electron'
      ? {
          //
        }
      : {},

    // dev/prod options.
    process.env.DEV
      ? {
          //
        }
      : {},
    process.env.PROD
      ? {
          //
        }
      : {},

    // For ssr mode, when on server.
    process.env.MODE === 'ssr' && process.env.SERVER
      ? {
          ssrMode: true
        }
      : {},
    // For ssr mode, when on client.
    process.env.MODE === 'ssr' && process.env.CLIENT
      ? {
          ssrForceFetchDelay: 100
        }
      : {}
  )
}
