import { MutationOptions, useMutation } from "@apollo/react-hooks"
import React, { ReactNode } from "react"

import { Para } from "../../Components/UI/Text"

interface MutationOutput {
  mutate: () => void,
  errorMessage?: string
}

interface Props extends MutationOptions {
  LoadingComponent?: ReactNode,
  // tslint:disable-next-line
  children: (vars: MutationOutput) => any
}

function MutationComponent({
  children, LoadingComponent, mutation, ...other
}: Props) {
  const [mutate, { loading, error }] = useMutation(mutation, other)

  if (loading) {
    if (LoadingComponent) {
      return LoadingComponent
    }

    return <Para center>Loading...</Para>
  }

  let errorMessage

  if (error) {
    errorMessage = error.message
  }

  return children({ mutate, errorMessage })
}

export default MutationComponent
