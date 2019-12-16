/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsersEntries
// ====================================================

export interface getUsersEntries_get_users__userId_entries_days_entries {
  text: string | null;
  emoji: string | null;
  entryId: string | null;
}

export interface getUsersEntries_get_users__userId_entries_days {
  date: string | null;
  entries: getUsersEntries_get_users__userId_entries_days_entries[] | null;
  streakLength: number | null;
}

export interface getUsersEntries_get_users__userId_entries {
  days: getUsersEntries_get_users__userId_entries_days[] | null;
  hasPostToday: boolean | null;
}

export interface getUsersEntries {
  /**
   * This should return all entries belonging to a user
   */
  get_users__userId_entries: getUsersEntries_get_users__userId_entries;
}

export interface getUsersEntriesVariables {
  userId: string;
}
