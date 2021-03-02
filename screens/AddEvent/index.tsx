import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  RadioButton,
  Paragraph,
} from "react-native-paper";

import { ViewContainer, ViewRow, ViewSpace } from "../../components/Layout/Views";
import { View } from "../../components/Themed";
import { EventType } from "./EventType";
import { Input } from "../../components/Input";

const EvenRadio = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      >
        First
      </RadioButton>
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      />
    </View>
  );
};

const EventNumberOfGuests = () => {
  const [numberOfGuests, setNumberOfGuests] = React.useState(0);

  const removeGuest = () => {
    if (numberOfGuests > 0) setNumberOfGuests(numberOfGuests - 1);
  };

  const addGuest = () => {
    setNumberOfGuests(numberOfGuests + 1);
  };

  return (
    <ViewRow>
      <Button icon="minus" mode="outlined" onPress={removeGuest}>
        Remove guest
      </Button>
      <NumberOfGuestsCounter>{numberOfGuests}</NumberOfGuestsCounter>
      <Button icon="plus" mode="outlined" onPress={addGuest}>
        Add guest
      </Button>
    </ViewRow>
  );
};

export default function AddEvent() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

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

      <StyledParagraph>Maximum number of guests</StyledParagraph>
      <Section>
        <EventNumberOfGuests />
      </Section>

      <Section>
        <Input label="Event description" multiline />
      </Section>

      <Section>
        <Input label="Event date" multiline />
      </Section>

      <Button mode="contained" onPress={onSaveEvent}>
        Add event
      </Button>
    </ViewContainer>
  );
}

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 8px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const NumberOfGuestsCounter = styled.div`
  margin: auto 20px;
`;
