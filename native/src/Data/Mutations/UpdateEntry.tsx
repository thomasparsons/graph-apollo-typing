import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { UpdateEntryVariables } from "./generated/UpdateEntry"
import MutationComponent from "./MutationComponent"

const UPDATE_ENTRY_MUTATION = gql`
  mutation UpdateEntry($entryId: String!, $userId: String!, $text: String!, $emoji: String!) {
    put_users__userId_entries__entryId(entryId: $entryId, userId: $userId, text: $text, emoji: $emoji) {
      emoji
      entryId
      text
    }
  }
`

interface OutputData {
  mutate: () => void
}

interface Props {
  children: (data: OutputData) => ReactNode,
  LoadingComponent: ReactNode,
  variables: UpdateEntryVariables,
  onCompleted (): void
}

function UpdateEntry(props: Props) {
  return (
    <MutationComponent
      mutation={UPDATE_ENTRY_MUTATION}
      refetchQueries={["getUsersEntries"]}
      {...props}
    />
  )
}

export default UpdateEntry
