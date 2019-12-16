import React from "react"
import { StyleSheet, TextInput } from "react-native"

import { inputStyles } from "./formStyles"
import Label from "./Label"

interface Props {
  label: string,
  maxLength?: number,
  multiline?: boolean,
  numberOfLines?: number,
  onChange: (text: string) => void,
  placeholder: string,
  testID: string,
  value: string,
}

const TextInputComponent = (props: Props) => {
  const {
    label, placeholder, maxLength, multiline, numberOfLines, onChange, testID, value
  } = props
  return (
    <>
      <Label label={label} />
      <TextInput
        // onBlur={setText}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        testID={testID}
        value={value}
      />
    </>
  )
}

const styles = StyleSheet.create(inputStyles)

export default TextInputComponent
