import { ApolloProvider } from "@apollo/react-hooks"
import React, { ReactNode } from "react"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
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
