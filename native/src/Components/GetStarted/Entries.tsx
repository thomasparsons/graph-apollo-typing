import React from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, TouchableOpacity, View } from "react-native"

import { Emoji, theme } from "../UI"
import { Para } from "../UI/Text"

interface Props {
  openCreateEntryModal (): void
}

const GetStartedEntries = ({ openCreateEntryModal }: Props) => (
  <TouchableOpacity
    onPress={openCreateEntryModal}
  >
    <View style={styles.view}>
      <Para center>
        <FormattedMessage id="getStarted.para.one" />
      </Para>
      <Para center>
        <FormattedMessage id="getStarted.para.two" />
      </Para>
      <View style={styles.emoji}>
        <Emoji dimension={130} emojiFontSize={75}>
          <FormattedMessage id="getStarted.para.emoji" />
        </Emoji>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  emoji: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.padding.general
  },
  view: {
    paddingHorizontal: theme.padding.general,
    paddingTop: theme.padding.large
  }
})

export default GetStartedEntries
