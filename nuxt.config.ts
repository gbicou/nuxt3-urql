import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: [
        'assets/tailwind.css'
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {}
                }
            }
        },
        transpile: [
            '@urql/vue'
        ],
    },
})
