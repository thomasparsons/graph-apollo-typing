/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_put_users__userId {
  displayName: string | null;
  language: string | null;
  userId: string | null;
}

export interface UpdateProfile {
  /**
   * Updates a user
   */
  put_users__userId: UpdateProfile_put_users__userId;
}

export interface UpdateProfileVariables {
  userId: string;
  displayName: string;
}
