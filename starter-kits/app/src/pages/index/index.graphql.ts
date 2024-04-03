import * as Types from '../../graphql/index'

import { computed as vueComputed } from 'vue'
import { useQuery as vueApolloUseQuery, useLazyQuery as vueApolloUseLazyQuery } from '@vue/apollo-composable'
import type * as VueApolloQuery from '@vue/apollo-composable/dist/useQuery'
import type { UseQueryReturn as VueApolloUseQueryReturn } from '@vue/apollo-composable'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type HelloWorldQueryVariables = Types.Exact<{ [key: string]: never }>

export type HelloWorldQuery = { __typename?: 'Query'; helloWorld: string }

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
