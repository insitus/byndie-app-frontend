import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, ActivityIndicator } from 'react-native-paper';

import { MY_EVENT_REQUESTS } from '../../graphql/queries';
import EventCard from './EventCard';

export default function MyEventRequests({ navigation}: {navigation: any}) {
  const { loading, error, data } = useQuery(MY_EVENT_REQUESTS);

  const renderCard = ({ item }: any) => (
    <EventCard data={item} />
  );

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator />}
      {error && <Text>Error occured</Text>}
      {data && data.requestsForMyEvents.length === 0 && <Text>You have no active requests</Text>}
      {data && !loading && (
        <FlatList data={data.requestsForMyEvents} renderItem={renderCard} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
