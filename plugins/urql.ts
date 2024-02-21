import { createClient, ssrExchange, fetchExchange, Client, type SSRData } from '@urql/core';
import { cacheExchange as graphCacheExchange } from '@urql/exchange-graphcache'
import { defineNuxtPlugin } from '#app'
import schema from '../gql/introspection';
import type { GraphCacheConfig } from '~/gql/schema';
import { ref } from "vue";

const ssrKey = '__URQL_DATA__'

export default defineNuxtPlugin(nuxt => {
  const { vueApp } = nuxt

  const ssr = ssrExchange({
    isClient: process.client
  })

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxt.hook('app:created', () => {
      ssr.restoreData(nuxt.payload[ssrKey] as SSRData)
    })
  }

  // when app has rendered in server, send SSR state to client
  if (process.server) {
    nuxt.hook('app:rendered', () => {
      nuxt.payload[ssrKey] = ssr.extractData()
    })
  }

  // use urql graphcache
  const cacheConfig: GraphCacheConfig = {
    schema,
    keys: {
      Country: (data) => data.code || null
    },
    resolvers: {
      Query: {
        country: (_, args) => ({__typename: "Country", code: args.code})
      }
    }
    // storage: process.client ? makeDefaultStorage() : undefined
  }
  const cache = graphCacheExchange(cacheConfig)

  const client = createClient({
    url: 'https://countries.trevorblades.com/',
    exchanges: [
      cache,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ]
  })

  nuxt.provide('urql', client)
  vueApp.provide('$urql', ref(client))

})

declare module '#app' {
  interface NuxtApp {
    $urql: Client
  }
}
