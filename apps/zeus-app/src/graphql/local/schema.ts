/* eslint-disable camelcase */
import gql from "graphql-tag";

export const userLoggedIn_Query = gql(`query userLoggedIn {
  userLoggedIn @client
}
`);
