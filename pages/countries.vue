<template>
  <section class="pt-5">
    <input type="text" v-model.trim="code" placeholder="search code" />
    <div v-if="data" class="pt-5">
      <table>
        <tbody>
        <tr v-for="c in data.countries" :key="c.code">
          <td class="pr-2">{{ c.emoji }}</td>
          <td>{{ c.name }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import {AllCountriesDocument} from "../gql/queries/all-countries";

const code = ref('')

/*
import {useNuxtApp} from "#app";

const app = useNuxtApp()

const { data } = await app.$urql.query(AllCountriesDocument).toPromise()
*/

import {useClientHandle} from "@urql/vue";

const urql = useClientHandle();

const variables = computed(() => {
  return code.value ? {filter: {code: {eq: code.value.toUpperCase()}}} : {}
})

const { data } = await urql.useQuery({query: AllCountriesDocument, variables})

/*
const data = await useAsyncData('countriesg', ctx => {
  return ctx.$urql.query(AllCountriesDocument).toPromise()
})
*/

</script>
