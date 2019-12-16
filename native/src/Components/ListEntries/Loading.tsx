import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

import { theme } from "../UI"
import { Fade } from "../UI/Animations"

interface Props {
  isOdd?: boolean
}

const EntryLoadingComponent: FC<Props> = ({ isOdd }) => (
  <Fade style={isOdd ? styles.wrapperOdd : styles.wrapperEven}>
    <View style={styles.date} />
    <View style={styles.content}>
      <View style={styles.text} />
      <View style={styles.emoji} />
    </View>

    <View style={styles.content}>
      <View style={styles.text} />
      <View style={styles.emoji} />
    </View>

    <View style={styles.content}>
      <View style={styles.text} />
      <View style={styles.emoji} />
    </View>
  </Fade>
)

const styling = {
  backgroundColor: theme.colors.secondary.background,
  borderRadius: theme.borders.radius,
  height: theme.padding.large,
  minHeight: 40
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.padding.general
  },
  date: {
    ...styling,
    width: "30%"
  },
  emoji: {
    ...styling,
    width: "20%"
  },
  text: {
    ...styling,
    width: "75%"
  },
  wrapperEven: {
    padding: theme.padding.general
  },
  wrapperOdd: {
    paddingHorizontal: theme.padding.general,
    paddingVertical: theme.padding.large
  }
})

export default EntryLoadingComponent
