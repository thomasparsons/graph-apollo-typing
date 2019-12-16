import React, { FC } from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, Text, View } from "react-native"

import { getUserAnalytics_get_analytics__userId as analyticsData } from "../../Data/Queries/generated/getUserAnalytics"
import { Emoji, theme } from "../UI"
import { Title } from "../UI/Text"

interface Props {
  analytics: analyticsData
}

const columns = 4

const EmojiAnalytics: FC<Props> = ({ analytics }) => {
  if (!analytics.emojis.length) { return null }

  return (
    <>
      <Title>
        <FormattedMessage id="analytics.emojis.title" />
      </Title>
      <View style={styles.wrapper}>
        {analytics.emojis.map((emojiAnalytics, i) => {
          const isLastCol = (i % columns === 0)

          return (
            <View key={emojiAnalytics.emoji}>
              {isLastCol && <View />}
              <View style={styles.listItem}>
                <Emoji dimension={60} emojiFontSize={32}>
                  {emojiAnalytics.emoji}
                </Emoji>
                <Text style={styles.text}>
&times;
                  {emojiAnalytics.count}
                </Text>
              </View>
            </View>
          )
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10
  },
  text: {
    fontSize: theme.text.para,
    fontWeight: "bold",
    paddingTop: 5,
    textAlign: "center"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: theme.padding.general
  }
})

export default EmojiAnalytics
