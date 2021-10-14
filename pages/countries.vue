<template>
  <section class="pt-5">
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </section>
</template>

<script setup lang="ts">
import {AllCountriesDocument} from "../gql/queries/all-countries";
import {NuxtApp} from "nuxt3";
import {useQuery} from "@urql/vue";
const data = await useQuery({query: AllCountriesDocument})

/*
const data = await useAsyncData('countriesg', ctx => {
  return ctx.$urql.query(AllCountriesDocument).toPromise()
})
*/

</script>

<script lang="ts">

</script>
