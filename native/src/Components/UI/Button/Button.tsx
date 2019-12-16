import React from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

import theme from "../theme"

interface Props {
  onPress: () => void,
  testID: string,
  text: string
}

const Button = (props: Props) => {
  const { onPress, testID, text } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      testID={testID}
    >
      <Text style={styles.text}>
        <FormattedMessage id={text} />
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary.background
  },
  text: {
    color: theme.colors.primary.text,
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    paddingBottom: 13,
    paddingTop: theme.padding.general,
    textAlign: "center"
  }
})

export default Button
