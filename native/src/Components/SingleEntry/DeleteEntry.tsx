import React from "react"

import DeleteEntryMutation from "../../Data/Mutations/DeleteEntry"
import session from "../../Data/session"
import { Button, LoadingText } from "../UI"

interface Props {
  entryId: string,
  close (): void
}

const DeleteEntry = ({ close, entryId }: Props) => {
  const { userId } = session.getUser()
  return (
    <DeleteEntryMutation
      LoadingComponent={
        <LoadingText text="delete.entry.loading" />
     }
      variables={{
        entryId,
        userId
      }}
      onCompleted={close}
    >
      {(({ mutate }) => (
        <Button
          onPress={mutate}
          testID="delete__entry__button"
          text="delete.entry.button"
        />
      ))}
    </DeleteEntryMutation>
  )
}

export default DeleteEntry
