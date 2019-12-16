import React from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, TouchableOpacity, View } from "react-native"

import { theme } from "../UI"
import { Para } from "../UI/Text"

interface Props {
  openCreateEntryModal (): void
}

const PromptEntry = ({ openCreateEntryModal }: Props) => (
  <TouchableOpacity
    onPress={openCreateEntryModal}
  >
    <View style={styles.view}>
      <Para center>
        <FormattedMessage id="entries.prompt" />
      </Para>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.secondary.background,
    borderRadius: theme.borders.radius,
    margin: theme.padding.general,
    paddingHorizontal: 10,
    paddingTop: 10
  }
})

export default PromptEntry
