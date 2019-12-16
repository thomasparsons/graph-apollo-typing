import { gql } from "apollo-boost"
import React, { ReactNode } from "react"
import { connect, Dispatch } from "react-redux"

import session from "../session"
import MutationComponent from "./MutationComponent"

const LOG_OUT_MUTATION = gql`
  mutation Logout {
    post_logout
  }
`

interface OutputData {
  mutate: () => void
}

interface Props {
  LoadingComponent: ReactNode,
  children: (data: OutputData) => ReactNode,
  dispatch: Dispatch,
  onCompleted?: () => void
}

function Login(props: Props) {
  return (
    <MutationComponent
      mutation={LOG_OUT_MUTATION}
      onCompleted={() => {
        session.removeJWT()
        props.dispatch(session.unSetUser())
      }}
      {...props}
    />
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
})

export default connect(mapDispatchToProps)(Login)
