<template>
  <section class="pt-5">
    <div class="flex items-center">
      <input type="text" v-model.trim="code" placeholder="search code">
      <div v-if="fetching" class="pl-2">fetching...</div>
    </div>
    <div v-if="data" class="pt-5">
      <table v-if="data.countries.length">
        <tbody>
          <tr v-for="c in data.countries" :key="c.code">
            <td class="pr-2">{{ c.emoji }}</td>
            <td>{{ c.name }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-gray-500">
        no results
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import {AllCountriesDocument} from "~/gql/queries/all-countries";
import {useClientHandle} from "@urql/vue";

const code = ref('')

const variables = computed(() => {
  return code.value ? {filter: {code: {eq: code.value.toUpperCase()}}} : {}
})

const urql = useClientHandle();

const { data, fetching } = await urql.useQuery({query: AllCountriesDocument, variables})


/*
import {useNuxtApp} from "#app";

const app = useNuxtApp()

const { data } = await app.$urql.query(AllCountriesDocument).toPromise()
*/

/*
const data = await useAsyncData('countriesg', ctx => {
  return ctx.$urql.query(AllCountriesDocument).toPromise()
})
*/

</script>
