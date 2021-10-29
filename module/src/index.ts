import  {defineNuxtModule, Nuxt } from "@nuxt/kit";
import { ClientOptions } from "@urql/core";

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
    addPluginTemplate({
      src: require.resolve('nuxt3-urql/plugin'),
      filename: 'urql.mjs',
      options
    });
*/

  }
}))
