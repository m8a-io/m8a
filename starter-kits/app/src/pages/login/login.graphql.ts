import * as Types from '../../graphql/index'

import {
  useMutation as vueApolloUseMutation,
  useApolloClient as vueApolloUseApolloClient
} from '@vue/apollo-composable'
import { ApolloError as ApolloCoreApolloError } from '@apollo/client/core'
import type { UseMutationOptions as VueApolloUseMutationOptions } from '@vue/apollo-composable'
import type { Ref as VueRef } from 'vue'
import type { ReactiveFunction as VueApolloReactiveFunction } from '@vue/apollo-composable/dist/util/ReactiveFunction'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
type VueApolloMutationOptionsParameter<TResult, TVariables> =
  | VueApolloUseMutationOptions<TResult, TVariables>
  | VueRef<VueApolloUseMutationOptions<TResult, TVariables>>
  | VueApolloReactiveFunction<VueApolloUseMutationOptions<TResult, TVariables>>
export type LoginWithTokenMutationVariables = Types.Exact<{
  token: Types.Scalars['String']['input']
}>

export type LoginWithTokenMutation = {
  __typename?: 'Mutation'
  loginWithToken?: {
    __typename?: 'AccessTokenDTO'
    accessToken?: string | null
    userId?: string | null
  } | null
}

export const LoginWithTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'loginWithToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'token' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'loginWithToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'token' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<LoginWithTokenMutation, LoginWithTokenMutationVariables>
export function useLoginWithTokenMutation(
  options?: VueApolloMutationOptionsParameter<LoginWithTokenMutation, LoginWithTokenMutationVariables>
) {
  const { resolveClient } = vueApolloUseApolloClient()
  const useMutation = vueApolloUseMutation(LoginWithTokenDocument, options)
  return {
    ...useMutation,
    loginWithToken: async (...params: Parameters<typeof useMutation.mutate>) => {
      const result = await useMutation.mutate(...params)
      if (result?.errors && result.errors.length > 0) {
        throw new ApolloCoreApolloError({
          graphQLErrors: result.errors
        })
      }
      const data = result?.data?.loginWithToken
      if (data === undefined) {
        throw new Error('No data returned from mutation')
      }

      const { cache } = resolveClient()

      return { data, cache }
    }
  }
}
