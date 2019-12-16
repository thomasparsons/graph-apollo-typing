import { gql } from "apollo-boost"
import React, { ReactNode } from "react"
import { connect, Dispatch } from "react-redux"

import session from "../session"
import { Login, LoginVariables } from "./generated/Login"
import MutationComponent from "./MutationComponent"

import LoginFragment from "../Fragments/login"

const LOG_IN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    post_login(email: $email, password: $password) {
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
  variables: LoginVariables
}

function LoginComponent(props: Props) {
  return (
    <MutationComponent
      mutation={LOG_IN_MUTATION}
      onCompleted={(user: Login) => {
        session.storeJWT(user.post_login.jwtToken)
        props.dispatch(session.setUser(user.post_login))
      }}
      {...props}
    />
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
})

export default connect(mapDispatchToProps)(LoginComponent)
