import React, { FC } from "react"
import {
  StyleSheet, Text, TouchableHighlight, View
} from "react-native"

import { getUsersEntries_get_users__userId_entries_days_entries } from "../../Data/queries/generated/getUsersEntries"
import { theme } from "../UI"

interface Props {
  entry: getUsersEntries_get_users__userId_entries_days_entries,
  onPress: () => void
}

const ListEntry: FC<Props> = ({ entry, onPress }) => {
  const { emoji, text } = entry
  return (
    <TouchableHighlight onPress={onPress} style={styles.content} underlayColor="transparent">
      <>
        <View style={styles.text}>
          <Text style={styles.textText}>{text}</Text>
        </View>
        <View style={styles.emoji}>
          <Text style={styles.emojiText}>{emoji}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.padding.general
  },
  emoji: {
    backgroundColor: theme.colors.secondary.background,
    borderRadius: theme.borders.radius,
    display: "flex",
    justifyContent: "center",
    minHeight: 40,
    width: "20%"
  },
  emojiText: {
    fontSize: 24,
    paddingTop: 2,
    textAlign: "center"
  },
  text: {
    backgroundColor: theme.colors.secondary.background,
    borderRadius: theme.borders.radius,
    display: "flex",
    justifyContent: "center",
    minHeight: 40,
    width: "75%"
  },
  textText: {
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    paddingBottom: 6,
    paddingHorizontal: 10,
    paddingTop: 10
  }
})

export default ListEntry
