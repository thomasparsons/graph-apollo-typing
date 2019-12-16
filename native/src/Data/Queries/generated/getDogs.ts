/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDogs
// ====================================================

export interface getDogs_getDogs_dogs_dogInfo {
  __typename: "DogInfo";
  age: number | null;
  name: string;
}

export interface getDogs_getDogs_dogs {
  __typename: "Dog";
  dogInfo: getDogs_getDogs_dogs_dogInfo | null;
}

export interface getDogs_getDogs {
  __typename: "Dogs";
  dogs: (getDogs_getDogs_dogs | null)[] | null;
}

export interface getDogs {
  getDogs: getDogs_getDogs | null;
}
