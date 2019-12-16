import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { CreateEntryVariables } from "./generated/CreateEntry"
import MutationComponent from "./MutationComponent"

const CREATE_ENTRY_MUTATION = gql`
  mutation CreateEntry($userId: String!, $text: String!, $emoji: String!) {
    post_users__userId_entries_new(userId: $userId, text: $text, emoji: $emoji) {
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
  variables: CreateEntryVariables,
  onCompleted (): void
}

function CreateEntry(props: Props) {
  return (
    <MutationComponent
      mutation={CREATE_ENTRY_MUTATION}
      refetchQueries={["getUsersEntries"]}
      {...props}
    />
  )
}

export default CreateEntry
