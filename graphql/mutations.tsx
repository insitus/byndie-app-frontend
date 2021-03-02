import { gql } from '@apollo/client';

export const USER_SIGNIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      accessToken
    }
  }
`
export const USER_REGISTER = gql`
  mutation registerUser($username: String!, $email: String!, $password: String!) {
    register(input: { username: $username, email: $email, password: $password}) {
      id
    }
  }
`
export const ADD_HEALTH = gql`
  mutation {
    addHealthCheck {
      message
      user {
        username
      }
    }
  }
`