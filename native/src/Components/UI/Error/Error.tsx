import React, { FC } from "react"
import { StyleSheet, Text } from "react-native"

import theme from "../theme"

interface Props {
  text: string
}

const ErrorText: FC<Props> = ({ text }) => (
  <Text style={styles.text}>
    {text}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    color: theme.colors.error,
    fontSize: theme.text.para,
    paddingTop: theme.padding.general,
    textAlign: "center"
  }
})

export default ErrorText
