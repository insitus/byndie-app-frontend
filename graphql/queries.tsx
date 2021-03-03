import { gql } from '@apollo/client';

export const LIST_EVENTS = gql`
  query allEvents {
    allEvents {
      id
      name
      eventType
      location
      user
      maxPeople
      dateFrom
      dateTo
      description
      details
      requests
    }
  }
`;
