import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

import { getUsersEntries_get_users__userId_entries_days } from "../../Data/queries/generated/getUsersEntries"
import { theme } from "../UI"
import ListEntry from "./Entry"
import Header from "./Header"

interface Props {
  day: getUsersEntries_get_users__userId_entries_days,
  isOdd: boolean,
  onPress: (entryId: string) => void
}

const ListItems: FC<Props> = ({ day, isOdd, onPress }) => (
  <View style={isOdd ? styles.wrapperOdd : styles.wrapperEven}>
    <Header day={day} />
    {day.entries.map((entry) => (
      <View key={entry.entryId}>
        <ListEntry entry={entry} onPress={() => onPress(entry.entryId)} />
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  wrapperEven: {
    padding: theme.padding.general
  },
  wrapperOdd: {
    padding: theme.padding.general
  }
})

export default ListItems
