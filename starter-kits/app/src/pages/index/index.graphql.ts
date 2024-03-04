import * as Types from '../../graphql/index'

import { computed as vueComputed } from 'vue'
import { useQuery as vueApolloUseQuery, useLazyQuery as vueApolloUseLazyQuery } from '@vue/apollo-composable'
import type * as VueApolloQuery from '@vue/apollo-composable/dist/useQuery'
import type { UseQueryReturn as VueApolloUseQueryReturn } from '@vue/apollo-composable'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type HelloWorldQueryVariables = Types.Exact<{ [key: string]: never }>

export type HelloWorldQuery = { __typename?: 'Query'; helloWorld: string }

export type GetCachedTokenQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCachedTokenQuery = { __typename?: 'Query'; getCachedToken?: string | null }

export const HelloWorldDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'helloWorld' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'helloWorld' } },
          { kind: 'Field', name: { kind: 'Name', value: 'helloWorld' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<HelloWorldQuery, HelloWorldQueryVariables>
export const GetCachedTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCachedToken' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'getCachedToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'getCachedToken' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetCachedTokenQuery, GetCachedTokenQueryVariables>
export function useHelloWorldQuery(
  variables: VueApolloQuery.VariablesParameter<HelloWorldQueryVariables> = {},
  options: VueApolloQuery.OptionsParameter<HelloWorldQuery, HelloWorldQueryVariables> = {}
) {
  const useQuery = vueApolloUseQuery(HelloWorldDocument, variables, options)
  return {
    ...useQuery,
    helloWorld: vueComputed(() => useQuery.result.value?.helloWorld)
  }
}

export function useHelloWorldLazyQuery(
  variables: VueApolloQuery.VariablesParameter<HelloWorldQueryVariables> = {},
  options: VueApolloQuery.OptionsParameter<HelloWorldQuery, HelloWorldQueryVariables> = {}
) {
  return vueApolloUseLazyQuery(HelloWorldDocument, variables, options)
}

export type HelloWorldCompositionFunctionResult = VueApolloUseQueryReturn<
  HelloWorldQuery,
  HelloWorldQueryVariables
>
export function useGetCachedTokenQuery(
  variables: VueApolloQuery.VariablesParameter<GetCachedTokenQueryVariables> = {},
  options: VueApolloQuery.OptionsParameter<GetCachedTokenQuery, GetCachedTokenQueryVariables> = {}
) {
  const useQuery = vueApolloUseQuery(GetCachedTokenDocument, variables, options)
  return {
    ...useQuery,
    getCachedToken: vueComputed(() => useQuery.result.value?.getCachedToken)
  }
}

export function useGetCachedTokenLazyQuery(
  variables: VueApolloQuery.VariablesParameter<GetCachedTokenQueryVariables> = {},
  options: VueApolloQuery.OptionsParameter<GetCachedTokenQuery, GetCachedTokenQueryVariables> = {}
) {
  return vueApolloUseLazyQuery(GetCachedTokenDocument, variables, options)
}

export type GetCachedTokenCompositionFunctionResult = VueApolloUseQueryReturn<
  GetCachedTokenQuery,
  GetCachedTokenQueryVariables
>
