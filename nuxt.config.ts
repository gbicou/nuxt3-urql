import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["water.css/out/light.css"],
  build: {
    transpile: ["@urql/vue"]
  }
});
