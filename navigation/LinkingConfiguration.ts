import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              Login: 'login',
            },
          },
          Register: {
            screens: {
              Register: 'register',
            },
          },
          Listing: {
            screens: {
              Listing: 'listing',
            },
          },
          AddEvent: {
            screens: {
              AddEvent: 'add-an-event',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
