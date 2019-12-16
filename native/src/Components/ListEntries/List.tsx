import React, { useState } from "react"

import EntriesQuery from "../../Data/Queries/Entries"
import session from "../../Data/session"
import { GetStartedEntries } from "../GetStarted"
import Day from "./Day"
import Loading from "./Loading"
import PromptEntry from "./PromptEntry"
import SingleEntryModal from "../SingleEntry"

interface Props {
  openCreateEntryModal (): void
}

const ListItems = ({ openCreateEntryModal }: Props) => {
  const { userId } = session.getUser()
  const [showModalEntryId, setModal] = useState(undefined)

  return (
    <EntriesQuery
      LoadingComponent={(
        <>
          <Loading />
          <Loading isOdd />
          <Loading />
        </>
      )}
      variables={{
        userId
      }}
    >
      {(({ get_users__userId_entries: userEntries }) => {
        if (!userEntries.days.length) {
          return (
            <GetStartedEntries
              openCreateEntryModal={openCreateEntryModal}
            />
          )
        }

        return (
          <>
            {!userEntries.hasPostToday && (
              <PromptEntry
                openCreateEntryModal={openCreateEntryModal}
              />
            )}

            {userEntries.days.map((day, i) => (
              <Day
                day={day}
                isOdd={i % 2 === 1}
                key={day.date}
                onPress={((entryId) => setModal(entryId))}
              />
            ))}

            {showModalEntryId && (
              <SingleEntryModal
                close={() => setModal(undefined)}
                entryId={showModalEntryId}
              />
            )}
          </>
        )
      })}
    </EntriesQuery>
  )
}

export default ListItems
