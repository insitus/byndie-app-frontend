import React, { useState } from "react";
import styled from "styled-components";
import { Button } from 'react-native';

import { ViewContainer, ViewSpace } from "../../components/Layout/Views";
import { View } from "../../components/Themed";
import { EventType } from "./EventType";
import { Input } from "../../components/Input";
import { DatePicker } from "../../components/DatePicker";
import { GuestsNumber } from "./GuestsNumber";

export default function AddEvent() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);

  const onSaveEvent = () => {
    // TODO: validate
    // TODO: save name, location, ... (from state)
  }

  return (
    <ViewContainer>
      <StyledParagraph>Event type</StyledParagraph>
      <Section>
        <ViewSpace>
          <EventType title="Place to stay" />
          <EventType title="Get together" />
        </ViewSpace>
        <ViewSpace>
          <EventType title="City tour" />
          <EventType title="Classes" />
        </ViewSpace>
      </Section>

      <Section>
        <Input label="Event name" value={name} onChange={value => setName(value)} />
      </Section>

      <Section>
        <Input label="Event location" value={location} onChange={value => setLocation(value)} />
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
        <Input label="Event description" multiline />
      </Section>

      <Button title="Add event"  onPress={onSaveEvent} />
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
