import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { getUserAnalytics, getUserAnalyticsVariables } from "./generated/getUserAnalytics"
import QueryComponent from "./QueryComponent"

const ANALYTICS_QUERY = gql`
query getUserAnalytics($userId: String!) {
  get_analytics__userId(userId: $userId) {
    userId
    streaks
    emojis {
      emoji
      count
    }
  }
}`

interface Props {
  children: (data: getUserAnalytics) => ReactNode,
  LoadingComponent?: ReactNode,
  variables: getUserAnalyticsVariables
}

function Analytics(props: Props) {
  return <QueryComponent query={ANALYTICS_QUERY} {...props} />
}

export default Analytics
