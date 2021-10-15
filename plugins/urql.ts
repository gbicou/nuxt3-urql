import { createClient, ssrExchange, dedupExchange, fetchExchange, cacheExchange, Client } from '@urql/core';
import { cacheExchange as graphCacheExchange } from '@urql/exchange-graphcache'
import { defineNuxtPlugin } from '#app'
import schema from '../gql/introspection';
import { GraphCacheConfig } from '../gql/schema';
import { fetch } from 'ohmyfetch'

const ssrKey = '__URQL_DATA__'

export default defineNuxtPlugin(nuxt => {
  const { app } = nuxt

  const ssr = ssrExchange({
    isClient: process.client
  })

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxt.hook('app:created', () => {
      ssr.restoreData(nuxt.payload[ssrKey])
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
      dedupExchange,
      cache,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
    fetch
  })

  nuxt.provide('urql', client)
  app.provide('$urql', client)

})

declare module '#app' {
  interface NuxtApp {
    $urql: Client
  }
}
