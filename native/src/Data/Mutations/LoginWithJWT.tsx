import { gql } from "apollo-boost"
import { client } from "../Provider"
import session from "../session"

import LoginFragment from "../Fragments/login"

const LOG_IN_WITH_JWT_MUTATION = gql`
  mutation LoginWithJWT($jwtToken: String!) {
    post_check_session(jwtToken: $jwtToken) {
      ...loginFragment
    }
  }
  ${LoginFragment}
`

function loginWithJWTComponent(jwtToken: string) {
  return client.mutate({
    mutation: LOG_IN_WITH_JWT_MUTATION,
    variables: {
      jwtToken
    }
  }).then((res) => {
    if (!res.data.post_check_session.jwtToken) {
      session.unSetUser()
      session.removeJWT()
    }

    session.storeJWT(res.data.post_check_session.jwtToken)
    return res.data.post_check_session
  })
    .catch(() => {
      session.unSetUser()
      session.removeJWT()
    })
}

export default loginWithJWTComponent
