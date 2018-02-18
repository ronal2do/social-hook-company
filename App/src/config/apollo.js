import { split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';

const HTTP_URI = 'http://localhost:4000/app/graphql';
const WS_URI = 'wss://localhost:4000/app/subscriptions';

const http = new HttpLink({ uri: HTTP_URI });
const ws = new WebSocketLink({
  uri: WS_URI,
  options: { reconnect: true }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  ws,
  http
);

const client = new ApolloClient({ link, cache: new InMemoryCache() });

export default client;
