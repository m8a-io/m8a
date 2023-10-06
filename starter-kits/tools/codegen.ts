import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://zeus-dev-api.m8a.io/graphql',
  documents: ['./src/**/*.gql'],
  noSilentErrors: true,
  generates: {
    'src/graphql/index.ts': {
      plugins: [
        {
          typescript: {
            enumsAsTypes: true
          }
        }
      ]
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.graphql.ts',
        baseTypesPath: './graphql/index.ts'
      },
      plugins: [
        'typescript-operations',
        'typed-document-node',
        '@dreamonkey/graphql-codegen-vue-apollo-plugin'
      ]
    }
  }
}

export default config
