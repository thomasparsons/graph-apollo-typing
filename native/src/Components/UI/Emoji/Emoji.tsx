import React, { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"

import theme from "../theme"

interface Props {
  children: ReactNode,
  dimension: number,
  emojiFontSize: number
}

const Emoji = ({ children, dimension, emojiFontSize }: Props) => (
  <View style={{
    borderRadius: dimension,
    height: dimension,
    width: dimension,
    ...styles.emoji
  }}
  >
    <Text style={{
      fontSize: emojiFontSize,
      ...styles.emojiText
    }}
    >
      {children}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  emoji: {
    backgroundColor: theme.colors.secondary.background,
    display: "flex",
    justifyContent: "center"
  },
  emojiText: {
    textAlign: "center"
  }
})

export default Emoji
