// @ts-ignore
import { defineNuxtPlugin } from "#app";
import { NuxtApp } from "nuxt3";

export default defineNuxtPlugin((app: NuxtApp) => {
    app.hook('app:created', () => {
        console.log('<%= options %>')
    })
});
