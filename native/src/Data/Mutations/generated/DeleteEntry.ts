/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteEntry
// ====================================================

export interface DeleteEntry {
  /**
   * Delete an entry by its id
   */
  delete_users__userId_entries__entryId: boolean;
}

export interface DeleteEntryVariables {
  userId: string;
  entryId: string;
}
