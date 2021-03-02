import { gql } from '@apollo/client';

export const USER_SIGNIN = gql`
  mutation {
    login(input: { username: $username, password: $password }) {
      accessToken
    }
  }
`


