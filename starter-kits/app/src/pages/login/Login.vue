<template>
  <q-page class="row items-center justify-evenly">
    <!-- <q-btn outline rounded @click="reset">Reset</q-btn> -->
    <!-- {{ me }} -->
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">From the GraphQL API:</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div v-if="gqlError">
          <div class="text-h6">Error:</div>
          {{ gqlError }}
        </div>
        <div v-else>Nothing to report back.</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import GlobalSpinner from 'components/GlobalSpinner.vue'
  import { useQuasar, useMeta } from 'quasar'
  import { useRoute, useRouter } from 'vue-router'
  import { useLoginWithTokenMutation } from './login.graphql'
  import { userLoggedInVar } from '../../apollo'

  export default defineComponent({
    name: 'PageLogin',

    setup() {
      const gqlError = ref('')
      const $q = useQuasar()
      const route = useRoute()
      const router = useRouter()
      const { loginWithToken, loading, onError } = useLoginWithTokenMutation()

      const metaData = {
        title: 'Login - m8a-Zeus-Dev'
      }

      useMeta(metaData)

      const data = async function (token: string) {
        try {
          const {
            data: { accessToken, userId }
          } = await loginWithToken({
            token
          })
          console.log('AccessToken', accessToken)
          if (accessToken !== '') {
            $q.loading.hide()
            $q.localStorage.set('isLoggedIn', true)
            userLoggedInVar.value = true
            $q.localStorage.set('token', accessToken)
            $q.localStorage.set('userId', userId)
            router.push('/')
          }
          return data
        } catch (_error) {
          gqlError.value = _error.message
          $q.loading.hide()
          console.log('got error', _error)
        }
      }

      // const {  } = login(route.query.code as string)
      console.log('data', data(route.query.code as string))

      // if(data.accessToken === ''){

      // }

      onError((error) => {
        $q.loading.hide()
        console.log('got error', error)
      })

      if (loading) {
        $q.loading.show({
          spinner: GlobalSpinner,
          delay: 300,
          message: 'Logging you in!'
        })
      }

      return {
        gqlError
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
