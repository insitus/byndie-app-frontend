import React from 'react';
import styled from "styled-components/native";
import { StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, ActivityIndicator, Button } from 'react-native-paper';

import { EVENT_DETAIL } from '../../graphql/queries';
import EventCard from '../ListEvents/EventCard';

interface Props {
  id: string;
}


export default function EventDetail({ route, navigation }: any) {
  const { id } = route.params;

  if (!id) {
    return <ActivityIndicator />;
  }

  const { loading, error, data } = useQuery(EVENT_DETAIL, {
    variables: { id },
  });

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator />}

      {error && <Text>Error occured</Text>}

      {data && !loading && (
        <Container>
          <Button mode="outlined" onPress={() => navigation.pop()}>Back</Button>
          <EventCard data={data.oneEvent} isDetailView />
        </Container>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});

const Container = styled.View`
  padding: 0;
`;
