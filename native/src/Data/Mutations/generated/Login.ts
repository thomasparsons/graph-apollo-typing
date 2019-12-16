/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_post_login {
  displayName: string | null;
  jwtToken: string | null;
  language: string | null;
  plan: string | null;
  userId: string | null;
}

export interface Login {
  /**
   * Login
   */
  post_login: Login_post_login;
}

export interface LoginVariables {
  email: string;
  password: string;
}
