<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>m8a-zeus-dev</q-toolbar-title>

        <q-toggle color="light-blue" :icon="darkIcon" v-model="darkMode" />
        <div v-if="userLoggedInVar">
          <UserAvatar />
          <UserAvatarMenu />
        </div>
        <div v-else>
          <q-btn label="Sign In" flat @click="openSignInDialog" />
          <q-btn label="Sign Up" flat />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Links</q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import EssentialLink from 'components/EssentialLink.vue'
  import { defineComponent, ref, watch } from 'vue'
  import { LocalStorage, useQuasar } from 'quasar'
  import UserAvatar from 'components/UserAvatar.vue'
  import UserAvatarMenu from 'components/UserAvatarMenu.vue'
  import SignInCardVue from 'components/SignInCard.vue'
  import { userLoggedInVar } from '../apollo'

  const linksList = [
    {
      title: 'Rancher UI',
      caption: 'Cluster Admininstration Instance',
      icon: 'app_registration',
      link: 'https://rancher.m8a.io'
    },
    {
      title: 'Coder-Zeus',
      caption: 'Dev Workspaces Management',
      icon: 'code',
      link: 'https://coder-zeus.m8a.dev'
    },
    {
      title: 'Keycloak OIDC',
      caption: 'OIDC Service Administration',
      icon: 'admin_panel_settings',
      link: 'https://auth.m8a.io'
    },
    {
      title: 'eMail System',
      caption: 'Mail Service Admininistration',
      icon: 'email',
      link: 'https://mail.m8a.io/sso/login?url=/webmail/?homepage'
    },
    {
      title: 'Cluster Workflows',
      caption: 'Argo Workflows UI for m8a',
      icon: 'checklist',
      link: 'https://workflows.m8a.io/'
    },
    {
      title: 'Continous Deployment',
      caption: 'Argo CD UI for m8a',
      icon: 'ads_click',
      link: 'https://deploy.m8a.io/'
    }
  ]

  export default defineComponent({
    name: 'MainLayout',

    components: {
      EssentialLink,
      UserAvatar,
      UserAvatarMenu
    },

    setup() {
      const $q = useQuasar()
      const leftDrawerOpen = ref(false)
      const darkMode = ref(false)
      const darkIcon = ref('')

      darkIcon.value = 'light_mode'

      console.log('user is logged in', userLoggedInVar.value)

      watch(darkMode, () => {
        $q.dark.toggle()
        $q.localStorage.set('darkMode', true)
        darkIcon.value === 'light_mode' ? (darkIcon.value = 'dark_mode') : (darkIcon.value = 'light_mode')
      })

      darkMode.value = $q.localStorage.getItem('darkMode') || false

      function openSignInDialog() {
        $q.dialog({
          component: SignInCardVue
        })
      }

      if (!LocalStorage.getItem('networkOk')) {
        console.log('network ok', LocalStorage.getItem('networkOk'))
        $q.dialog({
          message: 'Application has no connection to the API server. Please check back again later.'
        })
      }

      return {
        userLoggedInVar,
        darkMode,
        darkIcon,
        essentialLinks: linksList,
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        openSignInDialog
      }
    }
  })
</script>
