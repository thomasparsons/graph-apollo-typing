import React, { ReactNode } from "react"
import { StyleSheet, Text } from "react-native"

import theme from "../theme"

interface Props {
  center?: boolean,
  children: ReactNode
}

const Paragraph = ({ center, children }: Props) => (
  <Text
    style={{
      textAlign: center ? "center" : "left",
      ...styles.text
    }}
  >
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    marginBottom: 5
  }
})

export default Paragraph
