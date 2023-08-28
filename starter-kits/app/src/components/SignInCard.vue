<template>
  <q-dialog ref="dialogRef">
    <q-card square bordered class="q-pa-lg shadow-1">
      <!--<transition-group appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <q-card-section v-if="loginError">
          <q-banner key="banner" rounded class="text-white bg-red">{{ loginErrorMessage }} </q-banner>
        </q-card-section>
      </transition-group>

      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            square
            filled
            v-model="username"
            type="email"
            label="username"
            @keydown="loginError = false"
          />
          <q-input
            square
            filled
            v-model="password"
            :type="passwordVisible ? undefined : 'password'"
            label="password"
            @keydown="loginError = false"
          >
            <template #append>
              <q-icon
                :name="passwordVisible ? 'visibility' : 'visibility_off'"
                @click="passwordVisible = !passwordVisible"
              />
            </template>
          </q-input>
        </q-form>
      </q-card-section>
      <q-card-actions class="q-px-md">
        <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" @click="login()" />
      </q-card-actions>
      <q-card-section class="text-center q-pa-none">
        <p class="text-grey-6">Not registered? Create an Account</p>
      </q-card-section> -->
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
  import { useDialogPluginComponent, useQuasar } from 'quasar'
  import { useMutation } from '@vue/apollo-composable'
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    emits: [...useDialogPluginComponent.emits],

    setup() {
      const { dialogRef, onDialogOK } = useDialogPluginComponent()

      const $q = useQuasar()

      const username = ref('')
      const password = ref('')
      const loginErrorMessage = ref('')
      const loginError = ref(false)
      const passwordVisible = ref(false)

      // const { mutate: login } = useMutation(Login_Mutation, () => ({
      //   variables: {
      //     username: username.value,
      //     password: password.value
      //   },
      //   update: (
      //     cache,
      //     {
      //       data: {
      //         login: { accessToken, userId }
      //       }
      //     }
      //   ) => {
      //     if (!accessToken || !userId) {
      //       // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      //       loginError.value = true
      //       loginErrorMessage.value = 'Your username or password is incorrect. Please try again.'
      //     } else {
      //       $q.localStorage.set('token', accessToken as string)
      //       $q.localStorage.set('userId', userId as string)
      //       LocalStorage.set('isLoggedIn', true)
      //       $q.notify({
      //         color: 'teal',
      //         message: 'You are logged in.',
      //         icon: 'thumb_up'
      //       })
      //       onDialogOK()
      //     }
      //   }
      // }))

      return {
        // login,
        loginError,
        loginErrorMessage,
        dialogRef,
        username,
        password,
        passwordVisible
      }
    }
  })
</script>

<style>
  .q-card {
    width: 360px;
  }
</style>
