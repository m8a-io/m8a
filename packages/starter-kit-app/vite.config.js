import { defineConfig } from 'vite'
import graphqlNearOperationFile from '@dreamonkey/graphql-codegen-near-operation-file'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../..']
    }
  },
  resolve: {
    dedupe: ['vue']
  },
  plugins: [graphqlNearOperationFile()]
})
