/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateEntry
// ====================================================

export interface CreateEntry_post_users__userId_entries_new {
  emoji: string | null;
  entryId: string | null;
  text: string | null;
}

export interface CreateEntry {
  /**
   * Create a new entry
   */
  post_users__userId_entries_new: CreateEntry_post_users__userId_entries_new;
}

export interface CreateEntryVariables {
  userId: string;
  text: string;
  emoji: string;
}
