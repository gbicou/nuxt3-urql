import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["water.css/out/light.css"],
  build: {
    transpile: ["@urql/vue"]
  }
});
