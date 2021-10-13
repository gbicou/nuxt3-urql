<template>
  <section class="pt-5">
    <input type="number" v-model="n" />
    <div class="grid grid-cols-4 gap-4">
      <div v-for="i in n">{{i}}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
const n = ref(10)
</script>
