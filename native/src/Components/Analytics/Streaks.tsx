import React, { FC } from "react"
import { FormattedMessage } from "react-intl"
import { StyleSheet, View } from "react-native"

import { getUserAnalytics_get_analytics__userId as analyticsData } from "../../Data/Queries/generated/getUserAnalytics"
import { theme } from "../UI"
import { Para, Title } from "../UI/Text"

interface Props {
  analytics: analyticsData
}

const StreakAnalytics: FC<Props> = ({ analytics }) => {
  if (!analytics.streaks.length) { return null }

  return (
    <View style={styles.wrapper}>
      <Title>
        <FormattedMessage id="analytics.streaks.title" />
      </Title>

      {analytics.streaks.map((streak) => (
        <Para key={streak[0]}>
          <FormattedMessage
            id="analytics.streaks.streak"
            values={{
              dateFrom: streak[streak.length - 1],
              dateTo: streak[0],
              days: streak.length
            }}
          />
        </Para>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: theme.padding.large,
    paddingTop: theme.padding.general
  }
})

export default StreakAnalytics
