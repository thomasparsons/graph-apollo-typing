/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserAnalytics
// ====================================================

export interface getUserAnalytics_get_analytics__userId_emojis {
  emoji: string | null;
  count: number | null;
}

export interface getUserAnalytics_get_analytics__userId {
  userId: string | null;
  streaks: string[][] | null;
  emojis: getUserAnalytics_get_analytics__userId_emojis[] | null;
}

export interface getUserAnalytics {
  /**
   * This should return a users analytics
   */
  get_analytics__userId: getUserAnalytics_get_analytics__userId;
}

export interface getUserAnalyticsVariables {
  userId: string;
}
