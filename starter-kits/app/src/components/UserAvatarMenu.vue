<template>
  <q-menu v-bind="$attrs">
    <q-list>
      <q-item>
        <q-item-section side class="text-subtitle2">Name:</q-item-section>
        <q-item-section>{{ me.firstName }} {{ me.lastName }}</q-item-section>
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

<script setup lang="ts">
  import { useQuasar } from 'quasar'
  import { useLogoutMutation, useMeQuery } from './user-avatar-menu.graphql'

  const $q = useQuasar()
  const { logout } = useLogoutMutation()
  const { me } = useMeQuery()

  // Object.assign(me, $q.localStorage.getItem('me'))
  // console.log('me local storage get', $q.localStorage.getItem('me'))

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
  //       LocalStorage.set('isLoggedIn', true)
  //       $q.localStorage.remove('userId')
  //       $q.localStorage.remove('token')
  //     }
  //   }
  // }))

  function changePassword() {
    console.log('changePassword')
  }

  // function logoutUser () {
  //   try {
  //     window.location.replace(
  //       'https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/logout?post_logout_redirect_uri=https://zeus-dev.m8a.io/&client_id=zeus-dev'
  //     )
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  console.log('me in user avatar menu')
  const menuItems = [
    {
      label: 'Logout',
      handler: logout,
      icon: 'logout'
    },
    {
      label: 'Account',
      handler: changePassword,
      icon: 'account_box'
    }
  ]
</script>
