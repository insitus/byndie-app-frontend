import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {LIST_EVENTS} from '../graphql/queries';
import { Text, View } from '../components/Themed';
import { ApolloProvider, useQuery } from '@apollo/client';
import { ActivityIndicator } from 'react-native-paper';

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Listing() {

  const renderCard = ({item: listItem}:any) => {
    return <Text>{listItem.name}</Text>
  }

  const { loading, error, data } = useQuery(LIST_EVENTS, {
    // variables: { eventType: type },
  });

  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = AsyncStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
    <View style={styles.container}>
      { loading && <ActivityIndicator/> }
      { error && <Text>Error occured</Text> }
      { data && !loading &&
        <FlatList
          data={data.allEvents}
          renderItem={renderCard}
        />
      }
    </View>
  </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
