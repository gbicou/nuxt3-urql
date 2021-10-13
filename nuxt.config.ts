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
        // You can extend webpack config here
        transpile: [
//            '@vue/apollo-composable',
//            '@apollo/client',
//            'ts-invariant'
        ],
    },
    /*
    vite: {
        optimizeDeps: {
            include: [
//                '@apollo/client/core',
//                '@apollo/client/cache'
            ]
        }
    }
     */
})
