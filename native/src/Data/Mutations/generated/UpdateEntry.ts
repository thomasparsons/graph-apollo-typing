/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateEntry
// ====================================================

export interface UpdateEntry_put_users__userId_entries__entryId {
  emoji: string | null;
  entryId: string | null;
  text: string | null;
}

export interface UpdateEntry {
  /**
   * Update an existing entry
   */
  put_users__userId_entries__entryId: UpdateEntry_put_users__userId_entries__entryId;
}

export interface UpdateEntryVariables {
  entryId: string;
  userId: string;
  text: string;
  emoji: string;
}
