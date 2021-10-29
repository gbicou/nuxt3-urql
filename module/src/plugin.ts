import { defineNuxtPlugin } from "nuxt3";

export default defineNuxtPlugin((app) => {
    const options = '<%= options %>';
    app.hook('app:created', () => {
        console.log(options)
    })
});

