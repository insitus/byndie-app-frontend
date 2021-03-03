import * as React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";
import { LIST_EVENTS } from "../graphql/queries";
import { Text, View } from "../components/Themed";
import { ApolloProvider, useQuery } from "@apollo/client";
import { ActivityIndicator } from "react-native-paper";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import EventCard from "../components/Card";

export default function Listing() {
  const renderCard = ({ item: listItem }: any) => {
    return (
      <EventCard name={listItem.name}/>
    );
  };

  const { loading, error, data } = useQuery(LIST_EVENTS, {
    // variables: { eventType: type },
  });

  const httpLink = createHttpLink({
    uri: "http://localhost:3000/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = AsyncStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator />}
        {error && <Text>Error occured</Text>}
        {data && !loading && (
          <FlatList data={data.allEvents} renderItem={renderCard} />
        )}
      </ScrollView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
