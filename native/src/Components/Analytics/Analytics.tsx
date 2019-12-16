import React, { FC } from "react"
import { FormattedMessage } from "react-intl"
import { View } from "react-native"

import AnalyticsQuery from "../../Data/Queries/Analytics"
import session from "../../Data/session"
import { Para } from "../UI/Text"
import EmojiAnalytics from "./Emojis"
import StreakAnalytics from "./Streaks"

const Analytics: FC = () => {
  const { userId } = session.getUser()

  return (
    <View>
      <Para>
        <FormattedMessage id="analytics.message" />
      </Para>

      <AnalyticsQuery
        variables={{
          userId
        }}
      >
        {(({ get_analytics__userId: analytics }) => (
          <>
            <EmojiAnalytics analytics={analytics} />
            <StreakAnalytics analytics={analytics} />
          </>
        ))}
      </AnalyticsQuery>
    </View>
  )
}

export default Analytics
