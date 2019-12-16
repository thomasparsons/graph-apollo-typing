import { QueryOptions, useQuery } from "@apollo/react-hooks"
import React, { ReactNode } from "react"

import Error from "../../Components/UI/Error"
import { Para } from "../../Components/UI/Text"

interface Props extends QueryOptions {
  // tslint:disable-next-line
  children: (data: any) => any,
  LoadingComponent?: ReactNode
}

function QueryComponent({
  children, LoadingComponent, query, variables
}: Props) {
  const { loading, error, data } = useQuery(query, { variables })
  if (loading) {
    if (LoadingComponent) {
      return LoadingComponent
    }

    return <Para center>Loading...</Para>
  }

  if (error) {
    return <Error text="Error :(" />
  }

  return children({ ...data })
}

export default QueryComponent
