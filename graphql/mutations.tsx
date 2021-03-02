import { gql } from '@apollo/client';

export const USER_SIGNIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      accessToken
    }
  }
`


