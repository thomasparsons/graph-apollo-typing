import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import CreateEntryMutation from "../../Data/Mutations/CreateEntry"
import session from "../../Data/session"
import {
  Button, Error, Footer, LoadingText, Modal, theme
} from "../UI"
import Form from "./Form"
import validateEntry from "./validate"

interface Props {
  close (): void
}

const CreateEntryForm = ({ close }: Props) => {
  const { userId } = session.getUser()
  const [text, setText] = useState("")
  const [emoji, setEmoji] = useState("")
  const [error, setError] = useState(undefined)

  return (
    <Modal
      close={close}
      title="create.entry.title"
      visible
    >
      <CreateEntryMutation
        LoadingComponent={
          <LoadingText text="create.entry.loading" />
       }
        variables={{
          emoji,
          text,
          userId
        }}
        onCompleted={close}
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
                  testId="createEntry"
                />
                {error && <Error text={error} />}
              </View>
            </ScrollView>
            <Footer>
              <View style={styles.footer}>
                <Button
                  onPress={() => validateEntry(text, emoji, mutate, setError)}
                  testID="createEntry__form__button"
                  text="create.entry.button.submit"
                />
              </View>
            </Footer>
          </>
        ))}
      </CreateEntryMutation>
    </Modal>
  )
}

const styles = StyleSheet.create({
  footer: {
    paddingBottom: theme.padding.general
  }
})

export default CreateEntryForm
