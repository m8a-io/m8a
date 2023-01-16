/* eslint-disable */
/* eslint-disable camelcase */
import { gql } from '@apollo/client/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AccessTokenDto = {
  __typename?: 'AccessTokenDTO';
  accessToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserInput>;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: UserInput;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyUsers: Array<User>;
  createOneUser: User;
  deleteManyUsers: DeleteManyResponse;
  deleteOneUser: UserDeleteResponse;
  login?: Maybe<AccessTokenDto>;
  logout?: Maybe<AccessTokenDto>;
  /** This is the mutation for registering a new user. */
  register: User;
  updateManyUsers: UpdateManyResponse;
  updateOneUser: User;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInputDto;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  findByIdCustom: User;
  helloWorld: Scalars['String'];
  me: User;
  user?: Maybe<User>;
  userAggregate: Array<UserAggregateResponse>;
  users: UserConnection;
};


export type QueryFindByIdCustomArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserAggregateArgs = {
  filter?: InputMaybe<UserAggregateFilter>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type RegisterInputDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UserInput;
};

export type User = {
  __typename?: 'User';
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was created. */
  createdAt: Scalars['DateTime'];
  createdBy: User;
  /** The user's email address */
  email: Scalars['String'];
  /** The user's first name */
  firstName: Scalars['String'];
  id: Scalars['ID'];
  /** The user's last name */
  lastName: Scalars['String'];
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was modified. */
  modifiedAt: Scalars['DateTime'];
  modifiedBy: User;
  status: Scalars['String'];
  /** The user's username. In the form of an email address. Can be the user's email address of a version thereof. */
  username: Scalars['String'];
};

export type UserAggregateFilter = {
  and?: InputMaybe<Array<UserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  modifiedAt?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<UserAggregateFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserAggregateResponse = {
  __typename?: 'UserAggregateResponse';
  count?: Maybe<UserCountAggregate>;
  groupBy?: Maybe<UserAggregateGroupBy>;
  max?: Maybe<UserMaxAggregate>;
  min?: Maybe<UserMinAggregate>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  modifiedAt?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  modifiedAt?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was created. */
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  /** The user's email address */
  email?: Maybe<Scalars['String']>;
  /** The user's first name */
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** The user's last name */
  lastName?: Maybe<Scalars['String']>;
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was modified. */
  modifiedAt?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
  /** The user's username. In the form of an email address. Can be the user's email address of a version thereof. */
  username?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  modifiedAt?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserInput = {
  /** The user's email address */
  email: Scalars['String'];
  /** The user's first name */
  firstName: Scalars['String'];
  /** The user's last name */
  lastName: Scalars['String'];
  status: Scalars['String'];
  /** The user's username. In the form of an email address. Can be the user's email address or a version thereof. */
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  ModifiedAt = 'modifiedAt',
  Status = 'status',
  Username = 'username'
}

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  modifiedAt?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserAggregate_QueryQueryVariables = Exact<{
  filter?: InputMaybe<UserAggregateFilter>;
}>;


export type UserAggregate_QueryQuery = { __typename?: 'Query', userAggregate: Array<{ __typename?: 'UserAggregateResponse', groupBy?: { __typename?: 'UserAggregateGroupBy', id?: string | null | undefined, modifiedAt?: any | null | undefined, createdAt?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, username?: string | null | undefined, email?: string | null | undefined, status?: string | null | undefined } | null | undefined, count?: { __typename?: 'UserCountAggregate', id?: number | null | undefined, modifiedAt?: number | null | undefined, createdAt?: number | null | undefined, firstName?: number | null | undefined, lastName?: number | null | undefined, username?: number | null | undefined, email?: number | null | undefined, status?: number | null | undefined } | null | undefined, min?: { __typename?: 'UserMinAggregate', id?: string | null | undefined, modifiedAt?: any | null | undefined, createdAt?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, username?: string | null | undefined, email?: string | null | undefined, status?: string | null | undefined } | null | undefined, max?: { __typename?: 'UserMaxAggregate', id?: string | null | undefined, modifiedAt?: any | null | undefined, createdAt?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, username?: string | null | undefined, email?: string | null | undefined, status?: string | null | undefined } | null | undefined }> };

export type User_QueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type User_QueryQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } | null | undefined };

export type Users_QueryQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<Array<UserSort> | UserSort>;
}>;


export type Users_QueryQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null | undefined, hasPreviousPage?: boolean | null | undefined }, nodes: Array<{ __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } }> } };

export type FindByIdCustom_QueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindByIdCustom_QueryQuery = { __typename?: 'Query', findByIdCustom: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } };

export type HelloWorld_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorld_QueryQuery = { __typename?: 'Query', helloWorld: string };

export type Me_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Me_QueryQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } };

export type Login_MutationMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type Login_MutationMutation = { __typename?: 'Mutation', login?: { __typename?: 'AccessTokenDTO', accessToken?: string | null | undefined, userId?: string | null | undefined } | null | undefined };

export type Register_MutationMutationVariables = Exact<{
  data: RegisterInputDto;
}>;


export type Register_MutationMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } };

export type Logout_MutationMutationVariables = Exact<{ [key: string]: never; }>;


export type Logout_MutationMutation = { __typename?: 'Mutation', logout?: { __typename?: 'AccessTokenDTO', accessToken?: string | null | undefined, userId?: string | null | undefined } | null | undefined };

export type CreateOneUser_MutationMutationVariables = Exact<{
  input: CreateOneUserInput;
}>;


export type CreateOneUser_MutationMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } };

export type CreateManyUsers_MutationMutationVariables = Exact<{
  input: CreateManyUsersInput;
}>;


export type CreateManyUsers_MutationMutation = { __typename?: 'Mutation', createManyUsers: Array<{ __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } }> };

export type UpdateOneUser_MutationMutationVariables = Exact<{
  input: UpdateOneUserInput;
}>;


export type UpdateOneUser_MutationMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } };

export type UpdateManyUsers_MutationMutationVariables = Exact<{
  input: UpdateManyUsersInput;
}>;


export type UpdateManyUsers_MutationMutation = { __typename?: 'Mutation', updateManyUsers: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type DeleteOneUser_MutationMutationVariables = Exact<{
  input: DeleteOneUserInput;
}>;


export type DeleteOneUser_MutationMutation = { __typename?: 'Mutation', deleteOneUser: { __typename?: 'UserDeleteResponse', id?: string | null | undefined, modifiedAt?: any | null | undefined, createdAt?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, username?: string | null | undefined, email?: string | null | undefined, status?: string | null | undefined, createdBy?: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } | null | undefined, modifiedBy?: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string, createdBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string }, modifiedBy: { __typename?: 'User', id: string, modifiedAt: any, createdAt: any, firstName: string, lastName: string, username: string, email: string, status: string } } | null | undefined } };

export type DeleteManyUsers_MutationMutationVariables = Exact<{
  input: DeleteManyUsersInput;
}>;


export type DeleteManyUsers_MutationMutation = { __typename?: 'Mutation', deleteManyUsers: { __typename?: 'DeleteManyResponse', deletedCount: number } };


export const UserAggregate_Query = gql`
    query userAggregate_query($filter: UserAggregateFilter) {
  userAggregate(filter: $filter) {
    groupBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    count {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    min {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    max {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
  }
}
    `;
export const User_Query = gql`
    query user_query($id: ID!) {
  user(id: $id) {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const Users_Query = gql`
    query users_query($paging: OffsetPaging, $filter: UserFilter, $sorting: [UserSort!]) {
  users(paging: $paging, filter: $filter, sorting: $sorting) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      createdBy {
        id
        modifiedAt
        createdAt
        firstName
        lastName
        username
        email
        status
      }
      modifiedBy {
        id
        modifiedAt
        createdAt
        firstName
        lastName
        username
        email
        status
      }
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    totalCount
  }
}
    `;
export const FindByIdCustom_Query = gql`
    query findByIdCustom_query($id: String!) {
  findByIdCustom(id: $id) {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const HelloWorld_Query = gql`
    query helloWorld_query {
  helloWorld
}
    `;
export const Me_Query = gql`
    query me_query {
  me {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const Login_Mutation = gql`
    mutation login_mutation($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    accessToken
    userId
  }
}
    `;
export const Register_Mutation = gql`
    mutation register_mutation($data: RegisterInputDTO!) {
  register(data: $data) {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const Logout_Mutation = gql`
    mutation logout_mutation {
  logout {
    accessToken
    userId
  }
}
    `;
export const CreateOneUser_Mutation = gql`
    mutation createOneUser_mutation($input: CreateOneUserInput!) {
  createOneUser(input: $input) {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const CreateManyUsers_Mutation = gql`
    mutation createManyUsers_mutation($input: CreateManyUsersInput!) {
  createManyUsers(input: $input) {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const UpdateOneUser_Mutation = gql`
    mutation updateOneUser_mutation($input: UpdateOneUserInput!) {
  updateOneUser(input: $input) {
    id
    createdBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const UpdateManyUsers_Mutation = gql`
    mutation updateManyUsers_mutation($input: UpdateManyUsersInput!) {
  updateManyUsers(input: $input) {
    updatedCount
  }
}
    `;
export const DeleteOneUser_Mutation = gql`
    mutation deleteOneUser_mutation($input: DeleteOneUserInput!) {
  deleteOneUser(input: $input) {
    id
    createdBy {
      id
      createdBy {
        id
        modifiedAt
        createdAt
        firstName
        lastName
        username
        email
        status
      }
      modifiedBy {
        id
        modifiedAt
        createdAt
        firstName
        lastName
        username
        email
        status
      }
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedBy {
      id
      createdBy {
        id
        modifiedAt
        createdAt
        firstName
        lastName
        username
        email
        status
      }
      modifiedBy {
        id
        modifiedAt
        createdAt
        firstName
        lastName
        username
        email
        status
      }
      modifiedAt
      createdAt
      firstName
      lastName
      username
      email
      status
    }
    modifiedAt
    createdAt
    firstName
    lastName
    username
    email
    status
  }
}
    `;
export const DeleteManyUsers_Mutation = gql`
    mutation deleteManyUsers_mutation($input: DeleteManyUsersInput!) {
  deleteManyUsers(input: $input) {
    deletedCount
  }
}
    `;
