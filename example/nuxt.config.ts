import { defineNuxtConfig } from "nuxt3";
import { cacheExchange } from "@urql/core";

export default defineNuxtConfig({
  css: ["water.css/out/light.css"],
  modules: ["nuxt3-urql"],
  urql: {
    url: 'https://countries.trevorblades.com/',
    exchanges: [
      cacheExchange
    ]
  }
});
