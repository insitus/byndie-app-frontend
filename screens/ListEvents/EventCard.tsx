import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, Card } from "react-native-paper";
import styled from "styled-components/native";

import { IEventType } from "../../types";

interface Props {
  data: any;
  onSelect?: (id: string) => void;
  isDetailView?: boolean;
}

export default function EventCard ({ data, onSelect, isDetailView }: Props) {
  const getKeyWords = (type: IEventType, location: any) => {
    switch (type) {
      case 'Place to stay':
        // return 'appartment,house,' + location.country; // + ',' + location.city;
        return 'beautiful,modern,apartment,' + location?.country; // + ',' + location.city;

      case 'Remote work':
        return 'coworking';
      
      case 'City tour':
        return 'city,tourism';

      case 'Classes':
        return 'classmate,masterclass';

      default:
        return '';
    }
  }

  const [makeRequestMutation, requestResponse] = useMutation(
    gql`
     mutation createRequest($eventId: String!) {
       createRequestForEvent(
         input: { eventId: $eventId }
       ) {
         id
         accepted
         user {
           username
         }
       }
     }
    `
  )
  const makeRequest = () => {
    makeRequestMutation({ variables: { eventId: data.id }});
  }

  console.log({ requestResponse });


  return (
    <RelativeContainer>
      <CardContainer>
        <EventType>{data.eventType.name}</EventType>
        <Card onPress={() => onSelect?.(data.id)}>
          <Card.Cover source={{ uri: `https://source.unsplash.com/1040x860/?${getKeyWords(data.eventType.name, data.location)}` }} />
          <EventDetails>
            <Title>{data.name}</Title>
            <Location>
              {data?.location?.country}, {data?.location?.city}
            </Location>
            <Description>{data?.description}</Description>
            <Details>{data?.details}</Details>
            <Row>
              <Date>
                May 21 - May 22, 2021
              </Date>
              <Host>{data.user.username}</Host>
            </Row>
            <Reviews>🌮 7 {' '} 🍻 3</Reviews>

            {isDetailView && (
              <>
              <FullDescription>
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

              </FullDescription>
              {requestResponse.error && requestResponse.error.message}
              {requestResponse.data && requestResponse.data.createRequestForEvent && `Request sent!`}
              <Button onPress={makeRequest} mode="contained" disabled={!data.isRequestEnabled}>Request to stay</Button>
            </>
          )}
          </EventDetails>
        </Card>
      </CardContainer>
    </RelativeContainer>
  );
}

const RelativeContainer = styled.View`
  padding-top: 40px;
  position: relative;
`;

const CardContainer = styled.View`
  margin-bottom: 28px;
  font-family: "Arial";
  border: 2px solid rgba(0, 34, 51, 0.1);
  border-radius: 5px;
`;

const EventDetails = styled.View`
  padding: 14px 20px;
`;

const Title = styled.Text`
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;

  margin-bottom: 8px;
  overflow: hidden;  
`;

const Location = styled.Text`
  font-size: 17px;
  line-height: 22px;
  font-weight: 400;
  color: rgba(0, 34, 51, 0.6);

  margin-bottom: 12px;
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(0, 34, 51, 0.6);

  margin-bottom: 8px;
`;

const FullDescription = styled(Description)`
  font-size: 17px;
  margin-top: 24px;
  border-top: solid 1px #80808029;
  line-height: 30px;

	padding-top: 24px;
`;

const Details = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;
  color: rgba(0, 34, 51, 0.6);
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Date = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const Host = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: rgba(0, 34, 51, 0.6);

  margin-bottom: 12px;
`;

const Reviews = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(0, 34, 51, 0.6);
`;

const EventType = styled.Text`
  position: absolute;
  left: 36px;
  top: -16px;
  z-index: 1;

	display: flex;
	align-items: center;

  padding: 0 12px 2px 12px;
  height: 27px;

  color: #fff;
  background: #46B976;
  border-radius: 100px;
`;
