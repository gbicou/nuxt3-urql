<template>
  <section class="pt-5">
    <div v-if="countries">
      <pre>{{ countries }}</pre>
    </div>
  </section>
</template>

<script setup lang="ts">
import {AllCountriesDocument} from "../gql/queries/all-countries";
import {NuxtApp} from "nuxt3";

// const result = await useQuery({query: AllCountriesDocument})

const countries = await useAsyncData('countries', ctx => {
  return ctx.$urql.query(AllCountriesDocument).toPromise()
})

</script>

<script lang="ts">

</script>
