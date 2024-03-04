import * as Types from '../../graphql/index'

import { computed as vueComputed } from 'vue'
import { useQuery as vueApolloUseQuery, useLazyQuery as vueApolloUseLazyQuery } from '@vue/apollo-composable'
import type * as VueApolloQuery from '@vue/apollo-composable/dist/useQuery'
import type { UseQueryReturn as VueApolloUseQueryReturn } from '@vue/apollo-composable'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type MeQueryVariables = Types.Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me: { __typename?: 'User'; id: string; username: string; email: string; status: string }
}

export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<MeQuery, MeQueryVariables>
export function useMeQuery(
  variables: VueApolloQuery.VariablesParameter<MeQueryVariables> = {},
  options: VueApolloQuery.OptionsParameter<MeQuery, MeQueryVariables> = {}
) {
  const useQuery = vueApolloUseQuery(MeDocument, variables, options)
  return {
    ...useQuery,
    me: vueComputed(() => useQuery.result.value?.me)
  }
}

export function useMeLazyQuery(
  variables: VueApolloQuery.VariablesParameter<MeQueryVariables> = {},
  options: VueApolloQuery.OptionsParameter<MeQuery, MeQueryVariables> = {}
) {
  return vueApolloUseLazyQuery(MeDocument, variables, options)
}

export type MeCompositionFunctionResult = VueApolloUseQueryReturn<MeQuery, MeQueryVariables>
