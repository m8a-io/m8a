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
  import GlobalSpinner from 'components/GlobalSpinner.vue'
  import { userLoggedInVar } from 'src/apollo'

  const $q = useQuasar()
  const { logout, loading } = useLogoutMutation()
  const { me } = useMeQuery()

  async function logoutUser() {
    const {
      data: { idToken }
    } = await logout()
    if (idToken !== null) {
      $q.loading.hide()
      $q.localStorage.set('isLoggedIn', false)
      userLoggedInVar.value = false
      $q.localStorage.remove('token')
      $q.localStorage.remove('userId')
      try {
        window.location.replace(
          `https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/logout?post_logout_redirect_uri=https://zeus-dev.m8a.io/&client_id=zeus-dev&id_token_hint=${idToken}`
        )
      } catch (e) {
        console.log(e)
      }
    }
  }

  if (loading) {
    $q.loading.show({
      spinner: GlobalSpinner,
      delay: 300,
      message: 'Logging you out!'
    })
  }

  function changePassword() {
    console.log('changePassword')
  }

  const menuItems = [
    {
      label: 'Logout',
      handler: logoutUser,
      icon: 'logout'
    },
    {
      label: 'Account',
      handler: changePassword,
      icon: 'account_box'
    }
  ]
</script>
