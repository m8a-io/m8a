<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>m8a-Zeus-Dev</q-toolbar-title>

        <q-toggle color="light-blue" :icon="darkIcon" v-model="darkMode" />
        <div v-if="userLoggedIn">
          <UserAvatar />
          <UserAccountMenu />
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
  import { computed, defineComponent, ref, watch } from 'vue'
  import { LocalStorage, useQuasar } from 'quasar'
  import { useQuery } from '@vue/apollo-composable'
  import UserAvatar from 'components/UserAvatar.vue'
  import UserAccountMenu from 'components/UserAccountMenu.vue'
  import SignInCardVue from 'components/SignInCard.vue'
  import { userLoggedIn_Query } from 'src/graphql/local/schema'

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
      UserAccountMenu
    },

    setup() {
      const $q = useQuasar()
      const leftDrawerOpen = ref(false)
      const darkMode = ref(false)
      const darkIcon = ref('')

      darkIcon.value = 'light_mode'

      const { result } = useQuery(userLoggedIn_Query)
      const userLoggedIn = computed(() => result.value?.userLoggedIn ?? false)
      console.log('user is logged in', userLoggedIn.value)

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
          message: 'Network has no connection to the server.'
        })
      }

      return {
        userLoggedIn,
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
