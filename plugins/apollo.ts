import {NuxtApp} from "nuxt3";

// import { DefaultApolloClient } from '@vue/apollo-composable'
// import { ApolloClient, HttpLink } from '@apollo/client/core'
// import { InMemoryCache } from '@apollo/client/cache'

export default (context: NuxtApp, inject) => {

    /*
    const httpLink = new HttpLink({
        uri: 'https://countries.trevorblades.com/'
    })

    const apolloClient = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

    inject('apollo', apolloClient)
    */
//    context.app.provide(DefaultApolloClient, apolloClient)
}
