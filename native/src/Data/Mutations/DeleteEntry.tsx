import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { DeleteEntryVariables } from "./generated/DeleteEntry"
import MutationComponent from "./MutationComponent"

const DELETE_ENTRY_MUTATION = gql`
  mutation DeleteEntry($userId: String!, $entryId: String!) {
    delete_users__userId_entries__entryId(userId: $userId, entryId: $entryId)
  }
`

interface OutputData {
  mutate: () => void
}

interface Props {
  children: (data: OutputData) => ReactNode,
  LoadingComponent: ReactNode,
  variables: DeleteEntryVariables
  onCompleted (): void
}

function Entries(props: Props) {
  return (
    <MutationComponent
      mutation={DELETE_ENTRY_MUTATION}
      refetchQueries={["getUsersEntries"]}
      {...props}
    />
  )
}

export default Entries
