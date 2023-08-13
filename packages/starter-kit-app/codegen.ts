import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://zeus-dev-api.m8a.io/graphql',
  documents: 'https://zeus-dev-api.m8a.io/graphql',
  generates: {
    './src/graphql/gen/': {
      preset: 'client',
      plugins: [
        'typed-document-node',
        'typescript-operations',
        '@dreamonkey/graphql-codegen-vue-apollo-plugin'
      ],
      config: {
        useTypeImports: true
      }
    }
  }
}

export default config
