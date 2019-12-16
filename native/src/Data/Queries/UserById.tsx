import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { getUserByUserId, getUserByUserIdVariables } from "./generated/getUserByUserId"
import QueryComponent from "./QueryComponent"

const ENTRY_BY_ID_QUERY = gql`
query getUserByUserId($userId: String!) {
  get_users__userId(userId: $userId) {
    email
    language
    displayName
  }
}`

interface Props {
  children: (data: getUserByUserId) => ReactNode,
  LoadingComponent: ReactNode,
  variables: getUserByUserIdVariables
}

function UserById(props: Props) {
  return <QueryComponent query={ENTRY_BY_ID_QUERY} {...props} />
}

export default UserById
