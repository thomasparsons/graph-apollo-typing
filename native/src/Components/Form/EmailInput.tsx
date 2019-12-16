import React from "react"
import { StyleSheet, TextInput } from "react-native"

import { inputStyles } from "./formStyles"
import Label from "./Label"

interface Props {
  label: string,
  onChange: (text: string) => void,
  placeholder: string,
  testID: string,
  value: string
}

const EmailInputComponent = (props: Props) => {
  const {
    label, placeholder, onChange, testID, value
  } = props
  return (
    <>
      <Label label={label} />
      <TextInput
        // onBlur={setText}
        autoCompleteType="email"
        keyboardType="email-address"
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        testID={testID}
        textContentType="emailAddress"
        value={value}
      />
    </>
  )
}

const styles = StyleSheet.create(inputStyles)

export default EmailInputComponent
