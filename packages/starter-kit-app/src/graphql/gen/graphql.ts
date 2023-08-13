/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type AccessTokenDto = {
  __typename?: 'AccessTokenDTO'
  accessToken?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['String']['output']>
}

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserInput>
}

export type CreateOneUserInput = {
  /** The record to create */
  user: UserInput
}

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>
  is?: InputMaybe<Scalars['Boolean']['input']>
  isNot?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  neq?: InputMaybe<Scalars['DateTime']['input']>
  notBetween?: InputMaybe<DateFieldComparisonBetween>
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input']
  upper: Scalars['DateTime']['input']
}

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse'
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output']
}

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter
}

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input']
}

/** Group by */
export enum GroupBy {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  iLike?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<Scalars['ID']['input']>>
  is?: InputMaybe<Scalars['Boolean']['input']>
  isNot?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['ID']['input']>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  neq?: InputMaybe<Scalars['ID']['input']>
  notILike?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>
  notLike?: InputMaybe<Scalars['ID']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createManyUsers: Array<User>
  createOneUser: User
  deleteManyUsers: DeleteManyResponse
  deleteOneUser: UserDeleteResponse
  /** The login mutation for the login process. */
  login?: Maybe<AccessTokenDto>
  /** The logout mutation for the logout process. */
  logout?: Maybe<AccessTokenDto>
  /** The login mutation for the login process. */
  m8aAuthLogin?: Maybe<AccessTokenDto>
  /** This is the mutation for registering a new user. */
  register: User
  updateManyUsers: UpdateManyResponse
  updateOneUser: User
}

export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput
}

export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput
}

export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput
}

export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput
}

export type MutationLoginArgs = {
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type MutationM8aAuthLoginArgs = {
  code: Scalars['String']['input']
  sessionStatus: Scalars['String']['input']
}

export type MutationRegisterArgs = {
  data: RegisterInputDto
}

export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput
}

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput
}

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo'
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>
}

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type Query = {
  __typename?: 'Query'
  findUserByIdCustom: User
  helloWorld: Scalars['String']['output']
  me: User
  user: User
  userAggregate: Array<UserAggregateResponse>
  users: UserConnection
}

export type QueryFindUserByIdCustomArgs = {
  id: Scalars['String']['input']
}

export type QueryUserArgs = {
  id: Scalars['ID']['input']
}

export type QueryUserAggregateArgs = {
  filter?: InputMaybe<UserAggregateFilter>
}

export type QueryUsersArgs = {
  filter?: UserFilter
  paging?: OffsetPaging
  sorting?: Array<UserSort>
}

export type RegisterInputDto = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  password: Scalars['String']['input']
}

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
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  iLike?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  is?: InputMaybe<Scalars['Boolean']['input']>
  isNot?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  notILike?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  notLike?: InputMaybe<Scalars['String']['input']>
}

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse'
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output']
}

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter
  /** The update to apply to all records found using the filter */
  update: UserInput
}

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input']
  /** The update to apply. */
  update: UserInput
}

export type User = {
  __typename?: 'User'
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was created. */
  createdAt: Scalars['DateTime']['output']
  createdBy: User
  /** The user's email address */
  email: Scalars['String']['output']
  /** The user's first name */
  firstName: Scalars['String']['output']
  id: Scalars['ID']['output']
  /** The user's last name */
  lastName: Scalars['String']['output']
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was modified. */
  modifiedAt: Scalars['DateTime']['output']
  modifiedBy: User
  status: Scalars['String']['output']
  /** The user's username. In the form of an email address. Can be the user's email address of a version thereof. */
  username: Scalars['String']['output']
}

export type UserAggregateFilter = {
  and?: InputMaybe<Array<UserAggregateFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  email?: InputMaybe<StringFieldComparison>
  firstName?: InputMaybe<StringFieldComparison>
  id?: InputMaybe<IdFilterComparison>
  lastName?: InputMaybe<StringFieldComparison>
  modifiedAt?: InputMaybe<DateFieldComparison>
  or?: InputMaybe<Array<UserAggregateFilter>>
  status?: InputMaybe<StringFieldComparison>
  username?: InputMaybe<StringFieldComparison>
}

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  firstName?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  lastName?: Maybe<Scalars['String']['output']>
  modifiedAt?: Maybe<Scalars['DateTime']['output']>
  status?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserAggregateGroupByCreatedAtArgs = {
  by?: GroupBy
}

export type UserAggregateGroupByModifiedAtArgs = {
  by?: GroupBy
}

export type UserAggregateResponse = {
  __typename?: 'UserAggregateResponse'
  count?: Maybe<UserCountAggregate>
  groupBy?: Maybe<UserAggregateGroupBy>
  max?: Maybe<UserMaxAggregate>
  min?: Maybe<UserMinAggregate>
}

export type UserConnection = {
  __typename?: 'UserConnection'
  /** Array of nodes. */
  nodes: Array<User>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output']
}

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate'
  createdAt?: Maybe<Scalars['Int']['output']>
  email?: Maybe<Scalars['Int']['output']>
  firstName?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  lastName?: Maybe<Scalars['Int']['output']>
  modifiedAt?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['Int']['output']>
  username?: Maybe<Scalars['Int']['output']>
}

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  email?: InputMaybe<StringFieldComparison>
  firstName?: InputMaybe<StringFieldComparison>
  id?: InputMaybe<IdFilterComparison>
  lastName?: InputMaybe<StringFieldComparison>
  modifiedAt?: InputMaybe<DateFieldComparison>
  or?: InputMaybe<Array<UserDeleteFilter>>
  status?: InputMaybe<StringFieldComparison>
  username?: InputMaybe<StringFieldComparison>
}

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse'
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  /** The user's email address */
  email?: Maybe<Scalars['String']['output']>
  /** The user's first name */
  firstName?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  /** The user's last name */
  lastName?: Maybe<Scalars['String']['output']>
  /** A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was modified. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>
  modifiedBy?: Maybe<User>
  status?: Maybe<Scalars['String']['output']>
  /** The user's username. In the form of an email address. Can be the user's email address of a version thereof. */
  username?: Maybe<Scalars['String']['output']>
}

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  email?: InputMaybe<StringFieldComparison>
  firstName?: InputMaybe<StringFieldComparison>
  id?: InputMaybe<IdFilterComparison>
  lastName?: InputMaybe<StringFieldComparison>
  modifiedAt?: InputMaybe<DateFieldComparison>
  or?: InputMaybe<Array<UserFilter>>
  status?: InputMaybe<StringFieldComparison>
  username?: InputMaybe<StringFieldComparison>
}

export type UserInput = {
  /** The user's email address */
  email: Scalars['String']['input']
  /** The user's first name */
  firstName: Scalars['String']['input']
  /** The user's last name */
  lastName: Scalars['String']['input']
  status: Scalars['String']['input']
  /** The user's username. In the form of an email address. Can be the user's email address or a version thereof. */
  username: Scalars['String']['input']
}

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  firstName?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  lastName?: Maybe<Scalars['String']['output']>
  modifiedAt?: Maybe<Scalars['DateTime']['output']>
  status?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  firstName?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  lastName?: Maybe<Scalars['String']['output']>
  modifiedAt?: Maybe<Scalars['DateTime']['output']>
  status?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserSort = {
  direction: SortDirection
  field: UserSortFields
  nulls?: InputMaybe<SortNulls>
}

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
  and?: InputMaybe<Array<UserUpdateFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  email?: InputMaybe<StringFieldComparison>
  firstName?: InputMaybe<StringFieldComparison>
  id?: InputMaybe<IdFilterComparison>
  lastName?: InputMaybe<StringFieldComparison>
  modifiedAt?: InputMaybe<DateFieldComparison>
  or?: InputMaybe<Array<UserUpdateFilter>>
  status?: InputMaybe<StringFieldComparison>
  username?: InputMaybe<StringFieldComparison>
}
