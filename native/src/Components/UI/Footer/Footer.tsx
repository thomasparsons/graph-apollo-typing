import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

import theme from "../theme"

interface Props {
  children: ReactNode
}

const Footer = ({ children }: Props) => (
  <View style={styles.footer}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  footer: {
    backgroundColor: theme.colors.primary.text,
    bottom: 0,
    paddingVertical: theme.padding.general,
    position: "absolute",
    width: "100%"
  }
})

export default Footer
