<template>
  <section class="pt-5">
    <input
      type="text"
      v-model.trim="code"
      placeholder="search code"
    >
    <div
      v-if="data"
      class="pt-5"
    >
      <table>
        <tbody>
          <tr
            v-for="c in data.countries"
            :key="c.code"
          >
            <td class="pr-2">
              {{ c.emoji }}
            </td>
            <td>{{ c.name }}</td>
          </tr>
        </tbody>
      </table>
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

const { data } = await urql.useQuery({query: AllCountriesDocument, variables})


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
