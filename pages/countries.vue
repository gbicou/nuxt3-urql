<template>
  <section class="pt-5">
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </section>
</template>

<script setup lang="ts">
import {AllCountriesDocument} from "../gql/queries/all-countries";

/*
import {useNuxtApp} from "#app";

const app = useNuxtApp()

const { data } = await app.$urql.query(AllCountriesDocument).toPromise()
*/

import {useClientHandle} from "@urql/vue";

const urql = useClientHandle();

const { data } = await urql.useQuery({query: AllCountriesDocument})

/*
const data = await useAsyncData('countriesg', ctx => {
  return ctx.$urql.query(AllCountriesDocument).toPromise()
})
*/

</script>
