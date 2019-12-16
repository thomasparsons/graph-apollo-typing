import React, { FC } from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, Text } from "react-native"
import theme from "../theme"

interface Props {
  text: string
}

const LoadingText: FC<Props> = ({ text }) => (
  <Text style={styles.text}>
    <FormattedMessage id={text} />
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    paddingTop: theme.padding.general,
    textAlign: "center"
  }
})

export default LoadingText
