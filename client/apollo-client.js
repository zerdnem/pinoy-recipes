
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql-server-example-nihility.vercel.app/graphql",
    cache: new InMemoryCache(),
});

export default client;
