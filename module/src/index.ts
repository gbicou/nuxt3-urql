import {defineNuxtModule, Nuxt, addPlugin } from "@nuxt/kit";
import { ClientOptions } from "@urql/core";
// import { resolve } from 'pathe'

export type Options = ClientOptions & {
  injectSsrExchange?: boolean
}

export default defineNuxtModule<Options>((nuxt: Nuxt) => ({
  name: "urql",
  defaults: {
    injectSsrExchange: true
  },
  setup(options: Options) {
    if (!nuxt.options.dev) {
      nuxt.options.build.transpile.push(/@urql\/vue/)
    }

    /*
    if (options.injectSsrExchange) {
      console.log(options.exchanges.findIndex((e) => 'extractData' in e))
    }
     */

    /*
    addPlugin({
      src: 'nuxt3-urql/plugin.mjs' // resolve(__dirname, 'plugin.mjs')
    })
     */
  }
}))
