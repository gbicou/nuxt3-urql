import { createClient, ssrExchange, dedupExchange, fetchExchange, Client } from '@urql/core';
import { cacheExchange } from '@urql/exchange-graphcache'
import { defineNuxtPlugin } from '#app'
import schema from '../gql/introspection';
import { GraphCacheConfig } from '../gql/schema';

const payloadKey = '__URQL_DATA__'

const cacheConfig: GraphCacheConfig = {
  schema,
  keys: {
    Country: (data) => data.code || null
  }
}

export default defineNuxtPlugin(nuxt => {
  const { app } = nuxt

  const ssr = ssrExchange({
    isClient: process.client
  })

  const cache = cacheExchange(cacheConfig)

  if (process.client) {
    nuxt.hook('app:created', () => {
      ssr.restoreData(nuxt.payload[payloadKey])
    })
  }

  if (process.server) {
    nuxt.hook('app:rendered', () => {
      nuxt.payload[payloadKey] = ssr.extractData()
    })
  }

  const client = createClient({
    url: 'https://countries.trevorblades.com/',
    exchanges: [
      dedupExchange,
      cache,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
  })

  nuxt.provide('urql', client)
  app.provide('$urql', client)

})

declare module '#app' {
  interface NuxtApp {
    $urql: Client
  }
}
