import * as React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

interface Props {
  data: any;
}

export default function EventCard ({ data }: Props) {
  // const props = {
  //   name: "Tour of Rotterdam - Kop van Zuid",
  //   eventType: "City tour",
  //   country: "Netherlands",
  //   city: "Rotterdam",
  //   description:
  //     "45 minute tour to the Eramusbridge, Hotel New York and de Hoerenloper.",
  //   details: "Bring a jacket, can be chilly!",
  //   host: "Brian V",
  //   dateFrom: "March 20 2020",
  //   dateTo: "",
  //   reviews: "🌮 7 🍻 3",
  // };

  return (
    <CardContainer>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <EventDetails>
          <Title>{data.name}</Title>
          <Location>
            {data.country}, {data.city}
          </Location>
          <Description>{data.description}</Description>
          <Details>{data.details}</Details>
          <Row>
            <Date>
              {data.dateFrom}
              {data.dateTo && " - " + data.dateTo}
            </Date>
            <Host>{data.host}</Host>
          </Row>
          <Reviews>{data.reviews}</Reviews>
        </EventDetails>
      </Card>
    </CardContainer>
  );
}


const CardContainer = styled.div`
  margin-bottom: 28px;
  font-family: "Arial";
  border: 2px solid rgba(0, 34, 51, 0.1);
  border-radius: 5px;
`;

const EventDetails = styled.div`
  padding: 14px 20px;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Location = styled.div`
  margin-bottom: 12px;
  font-size: 17px;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Details = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Date = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Host = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Reviews = styled.div`
  font-size: 12px;
`;
