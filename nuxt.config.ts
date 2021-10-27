import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["water.css/out/light.css"],
  build: {
    transpile: [/@urql/]
  },
});
