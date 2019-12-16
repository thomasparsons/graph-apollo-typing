import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import MutationComponent from "./MutationComponent"

const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword {
    post_logout
  }
`

interface OutputData {
  mutate: () => void
}

interface Props {
  children: (data: OutputData) => ReactNode,
  LoadingComponent: ReactNode,
  variables: {}
  onCompleted (): void
}

function ResetPasswordMutation(props: Props) {
  return (
    <MutationComponent
      mutation={RESET_PASSWORD_MUTATION}
      {...props}
    />
  )
}

export default ResetPasswordMutation
