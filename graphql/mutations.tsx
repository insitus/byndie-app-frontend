import { gql } from '@apollo/client';

export const USER_SIGNIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const USER_REGISTER = gql`
  mutation registerUser($username: String!, $email: String!, $password: String!) {
    register(input: { username: $username, email: $email, password: $password}) {
      id
    }
  }
`;

export const ADD_HEALTH = gql`
  mutation {
    addHealthCheck {
      message
      user {
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($name: String!, $eventType: EventTypeInput!, $location: LocationInput!, $maxPeople: Float!, $dateFrom: DateTime!, $dateTo: DateTime!, $description: String!, $details: String!) {
    addEvent(
      input: {
        name: $name,
        eventType: $eventType,
        location: $location,
        maxPeople: $maxPeople,
        dateFrom: $dateFrom,
        dateTo: $dateTo,
        description: $description,
        details: $details
      }
    ) {
      id
      name
    }
  }
`;

