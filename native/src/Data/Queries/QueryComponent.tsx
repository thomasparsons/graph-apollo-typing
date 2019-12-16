import React from "react"
import { Text } from "react-native"
import { QueryOptions, useQuery } from "@apollo/react-hooks"

interface Props extends QueryOptions {
  // tslint:disable-next-line
  children: (data: any) => any
}

function QueryComponent({ children, query, variables }: Props) {
  const { loading, error, data } = useQuery(query, { variables })
  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error</Text>
  }

  return children({ ...data })
}

export default QueryComponent
