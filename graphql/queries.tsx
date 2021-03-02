import { gql } from '@apollo/client';

export const LIST_EVENTS = gql`
  query listEvents {
    allEvents {
      id
      name
      eventType {
        name
      }
      location {
        city
        country
      }
      user {
        id
        username
        email
        lastName
        firstName
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
`