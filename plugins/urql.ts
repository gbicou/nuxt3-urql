import { createClient, ssrExchange, cacheExchange, dedupExchange, fetchExchange } from '@urql/core';
import { defineNuxtPlugin } from '#app'

const payloadKey = '__URQL_DATA__'

export default defineNuxtPlugin(nuxt => {
  const { app } = nuxt

  const ssr = ssrExchange({
    isClient: process.client
  })

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
      cacheExchange,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
  })

  app.provide('$urql', client)

})
