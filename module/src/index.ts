import { defineNuxtModule, Nuxt, resolveModule, addPluginTemplate, addTemplate } from "@nuxt/kit";
import { ClientOptions } from "@urql/core";
import devalue from "@nuxt/devalue" ;
import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";

export type Options = ClientOptions & {
  injectSsrExchange?: boolean
}

export default defineNuxtModule<Options>((nuxt: Nuxt) => ({
  name: "urql",
  defaults: {
    injectSsrExchange: true
  },
  setup(options: Options) {
    const __dirname__ = dirname(fileURLToPath(import.meta.url));

    if (!nuxt.options.dev) {
      nuxt.options.build.transpile.push(/@urql\/vue/)
    }

    addTemplate({
      filename: "urql.options.mjs",
      getContents: () => "export default " + devalue(options),
    });

    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs"),
    });

  }
}))
