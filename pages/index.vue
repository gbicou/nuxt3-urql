<template>
  <section class="pt-5">
    <input type="number" v-model="n" />
    <div class="grid grid-cols-6 gap-3 pt-5" v-if="n">
      <div v-for="c in n" :key="c" class="bg-green-300 rounded-2xl border hover:border-green-500 p-2 px-4">{{c}}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
const n = ref(10)
</script>
