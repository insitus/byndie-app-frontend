import React, { useState } from "react";
import styled from "styled-components";
import { Button } from 'react-native';

import { ViewContainer, ViewSpace } from "../../components/Layout/Views";
import { View } from "../../components/Themed";
import { EventType } from "./EventType";
import { Input } from "../../components/Input";
import { DatePicker } from "../../components/DatePicker";
import { GuestsNumber } from "./GuestsNumber";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../graphql/mutations";

export default function AddEvent() {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');

  const [addEventMutation, addResponse] = useMutation(ADD_EVENT, { 
    onCompleted({ addEvent }) {
      console.log({ addEvent })
    }
  })

  const onSaveEvent = () => {
    console.log({ name, eventType, country, city, maxGuests, description, details })
    // TODO: validate
    // TODO: save name, location, ... (from state)
    addEventMutation({ variables: {
      name,
      eventType: { name: eventType },
      location: { city, country },
      maxPeople: maxGuests,
      dateFrom: "2021-01-20",
      dateTo: "2021-08-21",
      description,
      details,
    }});
  }

  return (
    <ViewContainer>
      <StyledParagraph>Event type</StyledParagraph>
      <Section>
        <ViewSpace>
          <EventType title="Place to stay" selectedEventType={eventType} setValue={setEventType}/>
          <EventType title="Get together" selectedEventType={eventType} setValue={setEventType}/>
        </ViewSpace>
        <ViewSpace>
          <EventType title="City tour" selectedEventType={eventType} setValue={setEventType}/>
          <EventType title="Classes" selectedEventType={eventType} setValue={setEventType}/>
        </ViewSpace>
      </Section>

      <Section>
        <Input label="Event name" value={name} onChange={value => setName(value)} />
      </Section>

      <Section>
        <Input label="Country" value={country} onChange={value => setCountry(value)} />
        <Input label="City" value={city} onChange={value => setCity(value)} />
      </Section>

      <label>Event date</label>
      <Section>
        <DatePicker />
      </Section>

      <StyledParagraph>Maximum number of guests</StyledParagraph>
      <Section>
        <GuestsNumber value={maxGuests} onChange={value => setMaxGuests(value)}/>
      </Section>

      <Section>
        <Input label="Event description" value={description} onChange={value => setDescription(value)} multiline />
        <Input label="Event details" value={details} onChange={value => setDetails(value)} multiline />

      </Section>

      <Button title="Add event" onPress={onSaveEvent} />
    </ViewContainer>
  );
}

const StyledParagraph = styled.p`
  margin: 0 0 20px 0;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;
