import { ApolloProvider } from "@apollo/react-hooks"
import React, { ReactNode } from "react"

import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { setContext } from "apollo-link-context"
import { createHttpLink } from "apollo-link-http"
import session from "./session"

const authLink = setContext((_, { headers }) => {
  const user = session.getUser()

  return {
    headers: {
      ...headers,
      authorization: user ? user.jwtToken : ""
    }
  }
})

const httpLink = createHttpLink({
  uri: "https://what-went-well-graph.herokuapp.com/graphql"
  // uri: "http://localhost:4000/graphql"
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

export default Provider
