<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>m8a DSK - test</q-toolbar-title>

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
        <q-item-label header>Essential Links Blah</q-item-label>

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
      title: 'Docs',
      caption: 'quasar.dev',
      icon: 'school',
      link: 'https://quasar.dev'
    },
    {
      title: 'Github',
      caption: 'github.com/quasarframework',
      icon: 'code',
      link: 'https://github.com/quasarframework'
    },
    {
      title: 'Discord Chat Channel',
      caption: 'chat.quasar.dev',
      icon: 'chat',
      link: 'https://chat.quasar.dev'
    },
    {
      title: 'Forum',
      caption: 'forum.quasar.dev',
      icon: 'record_voice_over',
      link: 'https://forum.quasar.dev'
    },
    {
      title: 'Twitter',
      caption: '@quasarframework',
      icon: 'rss_feed',
      link: 'https://twitter.quasar.dev'
    },
    {
      title: 'Facebook',
      caption: '@QuasarFramework',
      icon: 'public',
      link: 'https://facebook.quasar.dev'
    },
    {
      title: 'Quasar Awesome',
      caption: 'Community Quasar projects',
      icon: 'favorite',
      link: 'https://awesome.quasar.dev'
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
