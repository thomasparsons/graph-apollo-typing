import { gql } from "apollo-boost"
import React, { ReactNode } from "react"
import { connect, Dispatch } from "react-redux"

import session from "../session"
import { CreateProfile, CreateProfileVariables } from "./generated/CreateProfile"
import MutationComponent from "./MutationComponent"

import LoginFragment from "../Fragments/login"

const CREATE_PROFILE_MUTATION = gql`
  mutation CreateProfile($email: String!, $password: String!) {
    post_users_new(email: $email, password: $password) {
      ...loginFragment
    }
  }

  ${LoginFragment}
`

interface OutputData {
  mutate: () => void
}

interface Props {
  children: (data: OutputData) => ReactNode,
  dispatch: Dispatch,
  LoadingComponent: ReactNode,
  variables: CreateProfileVariables
  onCompleted (): void

}

function CreateProfileMutation(props: Props) {
  return (
    <MutationComponent
      mutation={CREATE_PROFILE_MUTATION}
      refetchQueries={["getUsersEntries"]}
      onCompleted={(user: CreateProfile) => {
        session.storeJWT(user.post_users_new.jwtToken)
        props.dispatch(session.setUser(user.post_users_new))
      }}
      {...props}
    />
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
})

export default connect(mapDispatchToProps)(CreateProfileMutation)
