/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginWithJWT
// ====================================================

export interface LoginWithJWT_post_check_session {
  displayName: string | null;
  jwtToken: string | null;
  language: string | null;
  plan: string | null;
  userId: string | null;
}

export interface LoginWithJWT {
  /**
   * Check the user is logged in
   */
  post_check_session: LoginWithJWT_post_check_session;
}

export interface LoginWithJWTVariables {
  jwtToken: string;
}
