import React from "react"
import { StyleSheet, View } from "react-native"

import { TextInput } from "../Form"
import { theme } from "../UI"

interface Props {
  setEmoji: (val: string) => void,
  setText: (val: string) => void,
  emoji: string,
  text: string,
  testId: string,
}

const CreateEntryForm = (props: Props) => {
  const {
    emoji, setEmoji, text, setText, testId
  } = props

  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          label="create.entry.text"
          maxLength={140}
          onChange={(val: string) => setText(val)}
          placeholder="Your entry"
          testID={`${testId}__form__text`}
          value={text}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          label="create.entry.emoji"
          maxLength={5}
          onChange={(val: string) => setEmoji(val)}
          placeholder="An emoji"
          testID={`${testId}__form__emoji`}
          value={emoji}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.padding.general
  }
})

export default CreateEntryForm
