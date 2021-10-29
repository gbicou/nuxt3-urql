import {BuildConfig} from "unbuild";
// @ts-ignore
import pkg from './package.json';

export default {
    entries: [
        {
            input: './src/index',
            name: pkg.name
        },
        {
            input: './src/plugin',
            format: "esm",
        },
    ],
    externals: [
        "@urql/vue",
        "@urql/core",
        "@nuxt/kit"
    ],
} as BuildConfig
