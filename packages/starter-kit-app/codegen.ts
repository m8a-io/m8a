import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://zeus-dev-api.m8a.io/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    './src/graphql/index.ts': {
      plugins: [
        'typescript',
        'typed-document-node',
        'typescript-operations',
        '@dreamonkey/graphql-codegen-vue-apollo-plugin'
      ],
      config: {
        useTypeImports: true,
        typeScript: {
          enumsAsTypes: true
        }
      }
    }
  }
}

export default config
