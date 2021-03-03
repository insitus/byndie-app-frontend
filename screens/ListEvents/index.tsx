import React from 'react';
import styled from "styled-components/native";
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, ActivityIndicator, Button } from 'react-native-paper';

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
    <>
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator />}
        {error && <Text>Error occured</Text>}

        {data && !loading && (
          <>
          <Title>Discover events</Title>

          <ButtonContainer>
            <Button icon="filter-variant" mode="outlined" onPress={() => console.log('Pressed')}>
              Filters
            </Button>
          </ButtonContainer>

          <FlatList data={data.allEvents} renderItem={renderCard} />
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const Title = styled.Text`
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0.4000000059604645px;
`;

const ButtonContainer = styled.View`
  width: 180px;
  margin: 30px 0 20px 0;
`;
