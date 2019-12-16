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


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Dog = {
   __typename?: 'Dog',
  dogInfo?: Maybe<DogInfo>,
  someData?: Maybe<Scalars['String']>,
};

export type DogInfo = {
   __typename?: 'DogInfo',
  name: Scalars['String'],
  age?: Maybe<Scalars['String']>,
};

export type Dogs = {
   __typename?: 'Dogs',
  aString?: Maybe<Scalars['String']>,
  aBoolean?: Maybe<Scalars['Boolean']>,
  dogs?: Maybe<Array<Maybe<Dog>>>,
};

export type Query = {
   __typename?: 'Query',
  getDogs?: Maybe<Dogs>,
};



