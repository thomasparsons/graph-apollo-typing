import React, { FC } from "react"
import { FormattedDate, FormattedMessage } from "react-intl"
import { StyleSheet, Text, View } from "react-native"

import { getUsersEntries_get_users__userId_entries_days } from "../../Data/queries/generated/getUsersEntries"
import { theme } from "../UI"

interface Props {
  day: getUsersEntries_get_users__userId_entries_days
}

const EntryHeader: FC<Props> = ({ day }) => (
  <View style={styles.wrapper}>
    <View style={styles.date}>
      <Text style={styles.text}>
        <FormattedDate value={day.date} />
      </Text>
    </View>

    {day.streakLength && (
      <View style={styles.streak}>
        <Text style={styles.text}>
          <FormattedMessage id="entries.streak" values={{ streak: day.streakLength }} />
        </Text>
      </View>
    )}
  </View>
)

const styles = StyleSheet.create({
  date: {
    backgroundColor: theme.colors.secondary.background,
    borderRadius: theme.borders.radius,
    display: "flex",
    justifyContent: "center",
    minHeight: 40
  },
  streak: {
    backgroundColor: theme.colors.secondary.background,
    borderRadius: theme.borders.radius,
    display: "flex",
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    justifyContent: "center",
    minHeight: 40,
    textAlign: "center"
  },
  text: {
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.para,
    paddingHorizontal: 10,
    paddingTop: 4
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default EntryHeader
