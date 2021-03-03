import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, ActivityIndicator } from 'react-native-paper';

import { LIST_EVENTS } from '../../graphql/queries';
import EventCard from './EventCard';

export default function ListEvents({ navigation}: {navigation: any}) {
  const { loading, error, data } = useQuery(LIST_EVENTS, {
    // variables: { eventType: type },
  });

  const onEventSelect = (eventId: string) => {
    navigation.push('EventDetail', {
      id: eventId,
    })
  }

  const renderCard = ({ item }: any) => (
    <EventCard data={item} onSelect={onEventSelect} />
  );

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator />}
      {error && <Text>Error occured</Text>}

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
