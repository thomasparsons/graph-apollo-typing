import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { getEntryByEntryId, getEntryByEntryIdVariables } from "./generated/getEntryByEntryId"
import QueryComponent from "./QueryComponent"

const ENTRY_BY_ID_QUERY = gql`
query getEntryByEntryId($userId: String!, $entryId: String!) {
  get_users__userId_entries__entryId(userId: $userId, entryId: $entryId) {
    createdAt
    emoji
    entryId
    text
  }
}`

interface Props {
  children: (data: getEntryByEntryId) => ReactNode,
  LoadingComponent: ReactNode,
  variables: getEntryByEntryIdVariables
}

function EntryById(props: Props) {
  return <QueryComponent query={ENTRY_BY_ID_QUERY} {...props} />
}

export default EntryById
