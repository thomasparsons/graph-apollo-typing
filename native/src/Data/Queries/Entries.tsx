import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { getUsersEntries, getUsersEntriesVariables } from "./generated/getUsersEntries"
import QueryComponent from "./QueryComponent"

const ENTRIES_QUERY = gql`
query getUsersEntries($userId: String!) {
  get_users__userId_entries(userId: $userId) {
    days {
      date
      entries {
        text
        emoji
        entryId
      }
      streakLength
    }
    hasPostToday
  }
}`

interface Props {
  children: (data: getUsersEntries) => ReactNode,
  LoadingComponent?: ReactNode,
  variables: getUsersEntriesVariables
}

function Entries(props: Props) {
  return <QueryComponent query={ENTRIES_QUERY} {...props} />
}

export default Entries
