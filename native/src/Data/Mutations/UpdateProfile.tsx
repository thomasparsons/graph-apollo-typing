import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { UpdateProfileVariables } from "./generated/UpdateProfile"
import MutationComponent from "./MutationComponent"

const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfile($userId: String!, $displayName: String!) {
    put_users__userId(userId: $userId, displayName: $displayName) {
      displayName
      language
      userId
    }
  }
`

interface OutputData {
  mutate: () => void
}

interface Props {
  children: (data: OutputData) => ReactNode,
  LoadingComponent: ReactNode,
  variables: UpdateProfileVariables
  onCompleted?: () => void
}

function UpdateProfile(props: Props) {
  return (
    <MutationComponent
      mutation={UPDATE_PROFILE_MUTATION}
      refetchQueries={["getUserByUserId"]}
      {...props}
    />
  )
}

export default UpdateProfile
