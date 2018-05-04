import React, {Component} from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import Nav from './Config/routes'

const link = createHttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjftd0aan5wux0178970bcwmw'
});

// const client = new ApolloClient({
//   link: link,
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({
link: link,
cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Nav />
      </ApolloProvider>
    );
  }
}