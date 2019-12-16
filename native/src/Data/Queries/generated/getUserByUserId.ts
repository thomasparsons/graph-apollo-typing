/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserByUserId
// ====================================================

export interface getUserByUserId_get_users__userId {
  email: string | null;
  language: string | null;
  displayName: string | null;
}

export interface getUserByUserId {
  /**
   * This should return a user by their id
   */
  get_users__userId: getUserByUserId_get_users__userId;
}

export interface getUserByUserIdVariables {
  userId: string;
}
