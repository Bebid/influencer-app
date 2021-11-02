import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'

import VueApollo from 'vue-apollo'

// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://instars.hostify.one/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

import { createApolloProvider } from '@vue/apollo-option'
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

createApp(App)
    .use(apolloProvider)
    .mount('#app');
