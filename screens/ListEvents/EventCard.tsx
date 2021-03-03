import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { IEventType } from "../../types";

interface Props {
  data: any;
  onSelect?: (id: string) => void;
}

export default function EventCard ({ data, onSelect }: Props) {
  const getKeyWords = (type: IEventType, location: any) => {
    switch (type) {
      case 'Place to stay':
        // return 'appartment,house,' + location.country; // + ',' + location.city;
        return 'beautiful,modern,apartment,' + location.country; // + ',' + location.city;

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

  return (
    <CardContainer>
      <Card onPress={() => onSelect?.(data.id)}>
        <Card.Cover source={{ uri: `https://source.unsplash.com/1040x860/?${getKeyWords(data.eventType.name, data.location)}` }} />
        <EventDetails>
          <Title>{data.name}</Title>
          <Location>
            {data.location.country}, {data.location.city}
          </Location>
          <Description>{data.description}</Description>
          <Details>{data.details}</Details>
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

  margin-bottom: 12px;
  
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  margin-bottom: 8px;
`;

const Details = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;
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

  margin-bottom: 12px;
`;

const Reviews = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
