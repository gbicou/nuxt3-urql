import { createClient, ssrExchange, cacheExchange, dedupExchange, fetchExchange } from '@urql/core';
import {NuxtApp} from "nuxt3";

export default (context: NuxtApp, inject) => {

  const ssr = ssrExchange({
    isClient: process.client,
    initialState: process.client ? window.__URQL_DATA__ : undefined,
  })

  const client = createClient({
    url: 'https://countries.trevorblades.com/',
    exchanges: [
      dedupExchange,
      cacheExchange,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
  })

  inject('urql', client)
  inject('ussr', ssr)

  context.hook('app:rendered', () => {
    //context.ssrContext.URQL = ssr.extractData()
    console.debug(ssr.extractData())
    // console.debug(c)
  })
//    context.app.use(urql, client)
/*
    context.app.use(urql, {
        url: 'https://countries.trevorblades.com/',
    })
*/
}
