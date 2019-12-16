import React from "react"
import { StyleSheet, View } from "react-native"

import EntryQuery from "../../Data/Queries/EntryById"
import session from "../../Data/session"

import {
  Emoji, Footer, LoadingText, Modal, theme
} from "../UI"
import { Title } from "../UI/Text"

// import UpdateEntry from "../CreateUpdateEntry/UpdateEntry"
import DeleteEntry from "./DeleteEntry"

interface Props {
  entryId: string,
  close (): void
}

const THREE_HOURS = 60 * 60 * 1000 * 3

const SingleEntry = (props: Props) => {
  const { close, entryId } = props
  const { userId } = session.getUser()

  return (
    <Modal
      close={close}
      visible
    >
      <EntryQuery
        LoadingComponent={
          <LoadingText text="entry.loading" />
       }
        variables={{
          entryId,
          userId
        }}
      >
        {(({ get_users__userId_entries__entryId: entry }) => {
          const time = new Date().getTime() - new Date(entry.createdAt).getTime()
          const isEditableOrDeleteable = time < THREE_HOURS

          return (
            <>
              <View>
                <Title center>
                  {entry.text}
                </Title>
                {entry.emoji
                  && (
                  <View style={styles.emoji}>
                    <Emoji dimension={130} emojiFontSize={75}>
                      {entry.emoji}
                    </Emoji>
                  </View>
                  )}
              </View>

              {/* {isEditableOrDeleteable &&
                <UpdateEntry entry={entry} />
              } */}

              {isEditableOrDeleteable
                && (
                <Footer>
                  <View style={styles.footer}>
                    <DeleteEntry entryId={entryId} close={close} />
                  </View>
                </Footer>
                )}
            </>
          )
        })}
      </EntryQuery>
    </Modal>
  )
}

const styles = StyleSheet.create({
  emoji: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.padding.general
  },
  footer: {
    paddingBottom: theme.padding.general
  }
})

export default SingleEntry
