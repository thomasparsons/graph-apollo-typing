import React, { ReactNode } from "react"
import { StyleSheet, Text } from "react-native"

import theme from "../theme"

interface Props {
  center?: boolean,
  children: ReactNode
}

const Title = ({ center, children }: Props) => (
  <Text
    style={{
      textAlign: center ? "center" : "left",
      ...styles.title
    }}
  >
    {children}
  </Text>
)

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.title,
    marginBottom: 5
  }
})

export default Title
