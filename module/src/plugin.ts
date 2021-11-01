// @ts-ignore
import { defineNuxtPlugin } from "#app";
import { NuxtApp } from "nuxt3";
// @ts-ignore
import urqlOptions from "#build/urql.options.mjs";

export default defineNuxtPlugin((app: NuxtApp) => {
    app.hook('app:created', () => {
        console.log(urqlOptions)
    })
});
