import React from "react";
import styled from "styled-components";
import {
  Button,
  RadioButton,
  TextInput,
  Paragraph,
} from "react-native-paper";

import { ViewContainer, ViewRow, ViewSpace } from "../../components/Layout/Views";
import { View } from "../../components/Themed";
import { EventType } from "./EventType";

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

const EventName = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Event name"
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};

const EventLocation = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Event location"
      value={text}
      onChangeText={(text) => setText(text)}
    />
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

      <StyledParagraph>Event type</StyledParagraph>
      <Section>
        <EventName />
      </Section>

      <StyledParagraph>Event location</StyledParagraph>
      <Section>
        <EventLocation />
      </Section>

      <StyledParagraph>Maximum number of guests</StyledParagraph>
      <Section>
        <EventNumberOfGuests />
      </Section>

      <StyledParagraph>Event description</StyledParagraph>
      <Section>
        <TextInput multiline />
      </Section>

      <StyledParagraph>Event date</StyledParagraph>
      <Section>
        <TextInput multiline />
      </Section>

      <Button mode="contained" onPress={() => console.log("Pressed")}>
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
