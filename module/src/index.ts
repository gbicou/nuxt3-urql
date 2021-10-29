import { defineNuxtModule, Nuxt } from "@nuxt/kit-edge";

export default defineNuxtModule((nuxt: Nuxt) => ({
  name: "urql",
  setup() {
    if (!nuxt.options.dev) {
      nuxt.options.build.transpile.push(/@urql\/vue/)
    }
  }
}))
