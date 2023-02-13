# Nuxt 3 example of graphql with ssr

> :electric_plug: ***Available as a nuxt 3 module at https://github.com/gbicou/nuxt-urql***

This is a example of nuxt3 application with :

* [graphql code generation](https://www.graphql-code-generator.com/)
* [urql graphql client](https://formidable.com/open-source/urql/)
* SSR
* typescript everywhere
* composition api

Using countries graphql api from Trevor Blades https://countries.trevorblades.com/

## Docs

We recommend to look at the [nuxt3 documentation](http://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Rebuild typescript sources (schema, introspection and operations) from graphql files

```bash
yarn graphql-codegen
```

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Demo

Application is deployed :

* on vercel @ https://nuxt3-urql.vercel.app/
* on netlify @ https://nuxt3-urql.netlify.app/


