import React from 'react';
import styled from "styled-components/native";
import { StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, ActivityIndicator } from 'react-native-paper';

import { EVENT_DETAIL } from '../../graphql/queries';
import EventCard from '../ListEvents/EventCard';

interface Props {
  id: string;
}

export default function EventDetail (props: Props) {
  // if (!props.id) {
  //   return <ActivityIndicator />;
  // }

  const { loading, error, data } = useQuery(EVENT_DETAIL, {
    variables: { id: "01a131b2-ecf3-45b8-a6b0-2797a0d8a174" },
  });

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator />}

      {error && <Text>Error occured</Text>}

      {data && !loading && (
        <Container>
          <EventCard data={data.oneEvent} />
          <Detail>
            Apartment, near beach. Close to Amsterdam, Small living room, kitchen, bedroom 2 beds, private toilet and simple bathroom.

            Not allowed: loud music or inviting strangers into the airbnb.

            Amsterdam: 28 km
            Haarlem: 13 km
            Beach: 2,5 km

            Distance apartment beach: 2,5 kilometer.

            By car to Amsterdam 30 - 40 minutes, to Haarlem 15-20 minutes. By bus 382 to Amsterdam about 40-45 minutes.

            The space
            Several rooms with small private kitchen, private toilet. Private entrance with front door. Use of a small (!) Pool to cool down by hot weather in summer. Very close to beach and sea and, just about 25 km from Amsterdam. In the neigborhood serveral malls for grocery shopping, busses to beach, IJmuiden city, Amsterdam or Haarlem. Ferry to New Castle in the nearby harbor.

            Guest access
            Several rooms with small private kitchen, private toilet. Private entrance with private front door. Use of a (very) small (!) Pool to cool down by hot weather in summer. Very close to beach (5 minutes with car) and and only 20- 30 km from Amsterdam by car. (Bus 45 minutes). In the neighborhood several shops for grocery shopping, bus to beach, IJmuiden city, Amsterdam or Haarlem. Ferry to New Castle in the nearby harbor.

            Other things to note
            Dogs allowed. Cats allowed. Other small pets allowed. Not allowed: dangerous animals or animals that make a lot of noise. :D
          </Detail>
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

const Detail = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  margin-bottom: 8px;
`;

const Container = styled.View`
  padding: 0;
`;
