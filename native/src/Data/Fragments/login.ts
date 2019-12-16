import { gql } from "apollo-boost"

const loginFragment = gql`
  fragment loginFragment on User {
    displayName
    jwtToken
    language
    plan
    userId
  }
`

export default loginFragment
