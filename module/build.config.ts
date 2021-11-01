import {BuildConfig} from "unbuild";
import {name} from './package.json';

export default {
  declaration: true,
  entries: [
    {
      input: 'src/index',
      name
    },
    {
      input: 'src/plugin',
    },
  ],
  externals: [
    "@urql/vue",
    "@urql/core",
    "@nuxt/kit",
    "@nuxt/devalue",
    "pathe",
    "#app",
    "#build",
    "#build/urql.options.mjs"
  ],
} as BuildConfig
