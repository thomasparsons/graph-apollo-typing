/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEntryByEntryId
// ====================================================

export interface getEntryByEntryId_get_users__userId_entries__entryId {
  createdAt: string | null;
  emoji: string | null;
  entryId: string | null;
  text: string | null;
}

export interface getEntryByEntryId {
  /**
   * This should return an entry by it's id
   */
  get_users__userId_entries__entryId: getEntryByEntryId_get_users__userId_entries__entryId;
}

export interface getEntryByEntryIdVariables {
  userId: string;
  entryId: string;
}
