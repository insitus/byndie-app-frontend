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
          ListEvents: {
            screens: {
              ListEvents: 'list-events',
            },
          },
          AddEvent: {
            screens: {
              AddEvent: 'add-event',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
