<template>
  <q-page class="row items-center justify-evenly">
    <!-- <q-btn outline rounded @click="reset">Reset</q-btn> -->
    <!-- {{ me }} -->
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">From the GraphQL API:</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ helloWorld }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import GlobalSpinner from 'components/GlobalSpinner.vue'
  import { useQuasar, useMeta } from 'quasar'
  import { useHelloWorldQuery } from '../../graphql'

  export default defineComponent({
    name: 'PageIndex',

    setup() {
      const $q = useQuasar()
      const { helloWorld, loading, onResult } = useHelloWorldQuery()
      const metaData = {
        title: 'Home - m8a-Zeus-Dev'
      }

      useMeta(metaData)

      if (loading) {
        $q.loading.show({
          spinner: GlobalSpinner,
          delay: 300,
          message: 'Getting HelloWorld!'
        })
      }

      onResult(() => {
        console.log('got result', helloWorld.value)
        $q.loading.hide()
      })

      return {
        helloWorld
      }
    }
  })
</script>
<style lang="scss" scoped>
  .my-card {
    width: 100%;
    max-width: 300px;
  }
</style>
