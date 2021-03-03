import { useMutation, gql } from "@apollo/client";
import React from "react";
import { Button, Card } from "react-native-paper";
import styled from "styled-components/native";

interface Props {
  data: any;
  onSelect?: (id: string) => void;
  isDetailView?: boolean;
}

export default function EventRequestCard ({ data, onSelect, isDetailView }: Props) {

  const [makeAcceptMutation, acceptResponse] = useMutation(
    gql`
     mutation makeAccept($requestId: String!) {
       acceptRequest(requestId: $requestId) {
         id
       }
     }
    `
  )
  const makeAccept = () => {
    makeAcceptMutation({ variables: { requestId: data.id }});
  }

  console.log({ acceptResponse });

  const [makeDeclineMutation, declineResponse] = useMutation(
    gql`
     mutation makeDecline($requestId: String!) {
       declineRequest(requestId: $requestId) {
         id
       }
     }
    `
  )
  const makeDecline = () => {
    makeDeclineMutation({ variables: { requestId: data.id }});
  }

  console.log({ declineResponse });

  return (
    <CardContainer>
      <Card>
        <EventDetails>
          <Title>{data.event.name}</Title>
          {data?.event?.location && (
            <Location>
              {data?.event?.location?.country}, {data?.event?.location?.city}
            </Location>
          )}
          <Description>{data?.description}</Description>
          <Row>
          {data.accepted || data.declined ? 
          <Details>{data.accepted ? 'Accepted' : data.declined && 'Declined'}</Details> : <>
                  <Button mode="outlined" onPress={() => makeAccept()}>Accept</Button>
                  <Button mode="outlined" onPress={() => makeDecline()}>Decline</Button>
                </>
            }
          </Row>
          <Row>
            <Date>
              May 21 - May 22, 2021
            </Date>
            <Host>{data.user.username}</Host>
          </Row>
          <Reviews>🌮 7 {' '} 🍻 3</Reviews>

          
        </EventDetails>
      </Card>
    </CardContainer>
  );
}


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
