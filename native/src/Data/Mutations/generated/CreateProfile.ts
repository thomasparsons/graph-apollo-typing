/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProfile
// ====================================================

export interface CreateProfile_post_users_new {
  displayName: string | null;
  jwtToken: string | null;
  language: string | null;
  plan: string | null;
  userId: string | null;
}

export interface CreateProfile {
  /**
   * Create a new user
   */
  post_users_new: CreateProfile_post_users_new;
}

export interface CreateProfileVariables {
  email: string;
  password: string;
}
