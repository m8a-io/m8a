/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ApolloClientOptions,
  createHttpLink,
  InMemoryCache,
  from
  /* split */
} from '@apollo/client/core'
import type { BootFileParams } from '@quasar/app-vite'
import { setContext } from '@apollo/client/link/context'
import { LocalStorage } from 'quasar'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwt_decode from 'jwt-decode'
import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'
import { ref } from 'vue'

interface DecodedToken {
  foo: string
  exp: number
  iat: number
}

// Sets up our reactive variable for login status
export const userLoggedInVar = ref(false)

// No longer needed but keeping for reference
// export const userLoggedInVar = makeVar(false)

const retryLink = new RetryLink({
  attempts: {
    max: 2
  }
})

// set network connectivity flag to true, to assume connectivity is working
// if network connectivity is faulty, it will be caught below in errorLink
LocalStorage.set('networkOk', true)
LocalStorage.set('apiOk', true)

export function getClientOptions(options?: Partial<BootFileParams<unknown>>): ApolloClientOptions<unknown> {
  const authLink = setContext(async () => {
    const token: string | null = await LocalStorage.getItem('token')
    if (token) {
      LocalStorage.set('isLoggedIn', true)
      userLoggedInVar.value = true
    }
    return {
      headers: {
        authorization: token ? `bearer ${token}` : ''
      }
    }
  })

  const refreshLink = new TokenRefreshLink({
    accessTokenField: 'accessToken',
    // No need to refresh if access token exists and is not expired
    isTokenValidOrUndefined: async (): Promise<boolean> => {
      // first check health of api server
      if (LocalStorage.getItem('apiOk') === false) {
        const healthCheck = await fetch('https://zeus-dev-api.m8a.io/health', {
          // TODO - CONFIG: get config value for refresh URL as it will be different for each tenant
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include'
        })
        console.log('healthCheck', healthCheck.json.toString())
        if (healthCheck.json.toString() !== 'ok') {
          LocalStorage.set('apiOk', false)
          console.error('API is not healthy')
          return null // if api is not healthy, don't try to refresh token
        }
      }

      const token: string | null = LocalStorage.getItem('token')
      const userId: string | null = LocalStorage.getItem('userId')

      // No need to validate, if we don't have a userId, we aren't logged in.
      if (!userId) {
        return true
      }
      // make sure the token isn't expired
      if (token) {
        const decodedToken: DecodedToken = jwt_decode(token)
        if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
          return true
        }
      }
      // if it is expired
      LocalStorage.set('isLoggedIn', false)
      LocalStorage.remove('token')
      LocalStorage.remove('userId')
      return false
    },
    fetchAccessToken: async () => {
      const userId: string | null = LocalStorage.getItem('userId')
      if (!userId) {
        // no need to refresh if userId is not defined, as that means, there is no refresh token cookie set
        return null
      }
      // Use fetch to access the refreshUserToken api
      const response = await fetch('https://zeus-dev-api.m8a.io/refresh', {
        // TODO - CONFIG: get config value for refresh URL as it will be different for each tenant
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include'
      })
      return response.json()
    },
    handleFetch: (newToken) => {
      // save new access token to state
      LocalStorage.set('token', newToken)
      LocalStorage.set('isLoggedIn', true)
      userLoggedInVar.value = true
    },
    handleResponse: () => (response: { accessToken: string; userId: string }) => {
      if (!response) {
        return { accessToken: '' }
      }
      if (response.accessToken !== '') {
        LocalStorage.set('token', response.accessToken)
        LocalStorage.set('isLoggedIn', true)
        userLoggedInVar.value = true
        LocalStorage.set('userId', response.userId)
      } else {
        LocalStorage.remove('token')
        LocalStorage.set('isLoggedIn', false)
        userLoggedInVar.value = false
        LocalStorage.remove('userId')
      }
      return { accessToken: response.accessToken }
    },
    handleError: (error) => {
      console.error('Cannot refresh access token:', error)
      LocalStorage.set('isLoggedIn', false)
      LocalStorage.remove('token')
      LocalStorage.remove('userId')
      userLoggedInVar.value = false
      // we are not logged in, so redirect to keycloak to get logged in
      // TODO: - CONFIG - get config value for keycloak URL as it will be different for each system
      // i.e. m8a-team or m8a-network
      try {
        window.location.replace(
          'https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/auth?scope=openid&redirect_uri=https://zeus-dev.m8a.io/callback&client_id=zeus-dev&response_type=code'
        )
      } catch (e) {
        console.log(e)
      }
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
    if (networkError) {
      LocalStorage.set('networkOk', false)
      LocalStorage.set('apiOk', false)
      console.error('There is a network error: ', networkError)
    }
    if (graphQLErrors) {
      LocalStorage.set('apiOk', false)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      )
    }
  })

  return <ApolloClientOptions<unknown>>Object.assign(
    // General options.
    <ApolloClientOptions<unknown>>{
      link: from([refreshLink, authLink, retryLink, graphQLLink, errorLink]),
      cache: new InMemoryCache({
        // Below not needed, just left for reference
        // typePolicies: {
        //   Query: {
        //     fields: {
        //       userLoggedIn: {
        //         read() {
        //           return userLoggedInVar()
        //         }
        //       }
        //     }
        //   }
        // }
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
