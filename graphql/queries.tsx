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
    }
  }
`;

export const EVENT_DETAIL = gql`
  query eventDetail($id: String!) {
    oneEvent(id: $id) {
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
      isRequestEnabled
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

export const MY_EVENT_REQUESTS = gql`
  query {
    requestsForMyEvents {
      id
      accepted
      declined
      message
      event {
        id
        name
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
    }
  }
`;
