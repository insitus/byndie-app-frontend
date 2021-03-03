import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, ActivityIndicator } from 'react-native-paper';

import { LIST_EVENTS } from '../../graphql/queries';
import EventCard from './EventCard';

export default function ListEvents() {
  const { loading, error, data } = useQuery(LIST_EVENTS, {
    // variables: { eventType: type },
  });

  const renderCard = ({ item }: any) => (
    <EventCard data={item} />
  );

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator />}
      {error && <Text>Error occured: {error}</Text>}

      {data && !loading && (
        <FlatList data={data.allEvents} renderItem={renderCard} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
