import React from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, Text } from "react-native"

import { theme } from "../UI"

interface Props {
  label: string
}

const Label = (props: Props) => {
  const { label } = props
  return (
    <Text style={styles.label}>
      <FormattedMessage id={label} />
    </Text>
  )
}

const styles = StyleSheet.create({
  label: {
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    paddingBottom: 5
  }
})

export default Label
