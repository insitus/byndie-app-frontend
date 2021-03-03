import { gql } from '@apollo/client';

export const LIST_EVENTS = gql`
  query listEvents {
    allEvents {
      id
      name
      eventType {
        id
        name
      }
      location {
        city
        country
      }
      user {
        id
        username
        firstName
        lastName
        location {
          city
          country
        }
      }
      maxPeople
      dateFrom
      dateTo
      description
      details
      requests {
        id
        accepted
        declined
        message
        user {
          id
          username
          email
          lastName
          firstName
        }
      }
    }
  }
`;
