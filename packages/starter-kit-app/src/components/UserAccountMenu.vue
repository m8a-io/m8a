<template>
  <q-menu v-bind="$attrs">
    <q-list>
      <q-item>
        <q-item-section side class="text-subtitle2">Name:</q-item-section>
        <!-- <q-item-section>{{ me.firstName }} {{ me.lastName }}</q-item-section> -->
      </q-item>
      <q-item v-for="item in menuItems" :key="item.label" clickable v-close-popup @click="item.handler">
        <q-item-section side>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useQuasar } from 'quasar'
  import { useMutation, useQuery } from '@vue/apollo-composable'
  import { userLoggedInVar } from '../apollo/index'
  // import { Logout_Mutation, Me_Query } from '../graphql/gql-operations'

  export default defineComponent({
    name: 'UserAccountMenu',

    setup() {
      const $q = useQuasar()
      // const { result: meResult } = useQuery(Me_Query)

      // const me = computed(() => meResult.value ?? [])

      // const { mutate: logout } = useMutation(Logout_Mutation, () => ({
      //   update: (
      //     cache,
      //     {
      //       data: {
      //         logout: { accessToken, userId }
      //       }
      //     }
      //   ) => {
      //     console.log('logging out: ', accessToken, userId)
      //     if (!accessToken) {
      //       $q.notify({
      //         color: 'red-8',
      //         message: 'You are logged out.',
      //         icon: 'logout'
      //       })
      //       userLoggedInVar(false)
      //       $q.localStorage.remove('userId')
      //       $q.localStorage.remove('token')
      //     }
      //   }
      // }))

      function changePassword() {
        console.log('changePassword')
      }

      const menuItems = [
        {
          label: 'Logout',
          // handler: logout,
          icon: 'logout'
        },
        {
          label: 'Change Password',
          handler: changePassword,
          icon: 'lock'
        }
      ]
      return {
        menuItems
        // me
      }
    }
  })
</script>
