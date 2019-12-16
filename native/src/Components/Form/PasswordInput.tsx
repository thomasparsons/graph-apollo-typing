import React from "react"
import { StyleSheet, TextInput } from "react-native"

import { inputStyles } from "./formStyles"
import Label from "./Label"

interface Props {
  label: string,
  onChange: (text: string) => void,
  testID: string,
  value: string
}

const PasswordInputComponent = (props: Props) => {
  const {
    label, onChange, testID, value
  } = props
  return (
    <>
      <Label label={label} />
      <TextInput
        // onBlur={setText}
        autoCompleteType="password"
        onChangeText={onChange}
        placeholder="********"
        secureTextEntry
        style={styles.input}
        testID={testID}
        textContentType="password"
        value={value}
      />
    </>
  )
}

const styles = StyleSheet.create(inputStyles)

export default PasswordInputComponent
