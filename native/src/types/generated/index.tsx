import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Analytics = {
   __typename?: 'Analytics',
  userId?: Maybe<Scalars['String']>,
  emojis?: Maybe<Array<Emoji>>,
  streaks?: Maybe<Array<Array<Scalars['String']>>>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Day = {
   __typename?: 'Day',
  date?: Maybe<Scalars['String']>,
  streakLength?: Maybe<Scalars['Float']>,
  entries?: Maybe<Array<Entry>>,
};

export type Days = {
   __typename?: 'Days',
  days?: Maybe<Array<Day>>,
  hasPostToday?: Maybe<Scalars['Boolean']>,
};

export type Emoji = {
   __typename?: 'Emoji',
  count?: Maybe<Scalars['Int']>,
  emoji?: Maybe<Scalars['String']>,
};

export type Entry = {
   __typename?: 'Entry',
  createdAt?: Maybe<Scalars['String']>,
  createdDate?: Maybe<Scalars['String']>,
  emoji?: Maybe<Scalars['String']>,
  entryId?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  /** Update an existing entry */
  put_users__userId_entries__entryId: Entry,
  /** Delete an entry by its id */
  delete_users__userId_entries__entryId: Scalars['Boolean'],
  /** Create a new entry */
  post_users__userId_entries_new: Entry,
  /** Login */
  post_login: User,
  /** Check the user is logged in */
  post_check_session: User,
  /** Logout */
  post_logout: Scalars['Boolean'],
  /** Updates a user */
  put_users__userId: User,
  /** Create a new user */
  post_users_new: User,
};


export type MutationPut_Users__UserId_Entries__EntryIdArgs = {
  userId: Scalars['String'],
  entryId: Scalars['String'],
  text: Scalars['String'],
  emoji: Scalars['String']
};


export type MutationDelete_Users__UserId_Entries__EntryIdArgs = {
  userId: Scalars['String'],
  entryId: Scalars['String']
};


export type MutationPost_Users__UserId_Entries_NewArgs = {
  userId: Scalars['String'],
  text: Scalars['String'],
  emoji: Scalars['String']
};


export type MutationPost_LoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationPost_Check_SessionArgs = {
  jwtToken: Scalars['String']
};


export type MutationPut_Users__UserIdArgs = {
  userId: Scalars['String'],
  displayName: Scalars['String']
};


export type MutationPost_Users_NewArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  displayName?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  /** This should return a users analytics */
  get_analytics__userId: Analytics,
  /** This should return all entries belonging to a user */
  get_users__userId_entries: Days,
  /** This should return an entry by it's id */
  get_users__userId_entries__entryId: Entry,
  /** This should return all users */
  get_users: Array<User>,
  /** This should return a user by their id */
  get_users__userId: User,
};


export type QueryGet_Analytics__UserIdArgs = {
  userId: Scalars['String']
};


export type QueryGet_Users__UserId_EntriesArgs = {
  userId: Scalars['String']
};


export type QueryGet_Users__UserId_Entries__EntryIdArgs = {
  userId: Scalars['String'],
  entryId: Scalars['String']
};


export type QueryGet_Users__UserIdArgs = {
  userId: Scalars['String']
};


export type User = {
   __typename?: 'User',
  userId?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  jwtToken?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  plan?: Maybe<Scalars['String']>,
  slackId?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
};


