<template>
  <q-page class="row items-center justify-evenly">
    <!-- <q-btn outline rounded @click="reset">Reset</q-btn> -->
    <!-- {{ me }} -->
    <div>{{ helloWorld }}</div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GlobalSpinner from "../components/GlobalSpinner.vue";
import { useQuasar, LocalStorage } from "quasar";
import { useQuery } from "@vue/apollo-composable";
import { HelloWorld_Query } from "../graphql/gql-operations";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const $q = useQuasar();
    const { result, loading, onResult } = useQuery(HelloWorld_Query);
    const helloWorld = computed(() => result.value?.helloWorld ?? "");

    if (!LocalStorage.getItem("networkOk")) {
      $q.dialog({
        message: "Network has no connection to the server.",
      });
    } else if (loading) {
      console.log("should be showing loading");
      $q.loading.show({
        spinner: GlobalSpinner,
        delay: 300,
        message: "Getting HelloWorld!",
      });
    }

    onResult(() => {
      console.log("got result", helloWorld.value);
      $q.loading.hide();
    });

    return {
      helloWorld,
    };
  },
});
</script>
