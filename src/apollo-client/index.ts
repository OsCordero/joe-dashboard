import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const traderJoe = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange",
});

const masterchef = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv3",
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "masterchef",
    masterchef,
    traderJoe
  ),
  cache: new InMemoryCache(),
});

export default client;
