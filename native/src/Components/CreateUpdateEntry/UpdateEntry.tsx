import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import UpdateEntryMutation from "../../Data/Mutations/UpdateEntry"
import session from "../../Data/session"
import { Entry } from "../../types/generated"

import {
  Button, Error, Footer, LoadingText, theme
} from "../UI"
import Form from "./Form"
import validateEntry from "./validate"

interface Props {
  entry: Entry
}

const UpdateEntryForm = ({ entry }: Props) => {
  const { userId } = session.getUser()
  const [text, setText] = useState(entry.text)
  const [emoji, setEmoji] = useState(entry.emoji)
  const [error, setError] = useState(undefined)

  return (
    <UpdateEntryMutation
      LoadingComponent={
        <LoadingText text="update.entry.loading" />
      }
      variables={{
        emoji,
        entryId: entry.entryId,
        text,
        userId
      }}
      onCompleted={() => {}}
    >
      {(({ mutate }) => (
        <>
          <ScrollView>
            <View>
              <Form
                emoji={emoji}
                text={text}
                setEmoji={((val) => {
                  setError(undefined)
                  setEmoji(val)
                })}
                setText={((val) => {
                  setError(undefined)
                  setText(val)
                })}
                testId="updateEntry"
              />
              {error && <Error text={error} />}
            </View>
          </ScrollView>
          <Footer>
            <View style={styles.footer}>
              <Button
                onPress={() => validateEntry(text, emoji, mutate, setError)}
                testID="updateEntry__form__button"
                text="update.entry.button.submit"
              />
            </View>
          </Footer>
        </>
      ))}
    </UpdateEntryMutation>
  )
}

const styles = StyleSheet.create({
  footer: {
    paddingBottom: theme.padding.general
  }
})

export default UpdateEntryForm
