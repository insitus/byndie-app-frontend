import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Chip,
  RadioButton,
  TextInput,
  Paragraph,
} from "react-native-paper";
import styled from "styled-components";

import { View } from "../components/Themed";

const EventChip = (props: any) => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <Chip
      icon={props.icon}
      selected={isSelected}
      onPress={() => setIsSelected(true)}
    >
      {props.title}
    </Chip>
  );
};

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
    <View style={styles.row}>
      <Button icon="minus" mode="outlined" onPress={removeGuest}>
        Remove guest
      </Button>
      <NumberOfGuestsCounter>{numberOfGuests}</NumberOfGuestsCounter>
      <Button icon="plus" mode="outlined" onPress={addGuest}>
        Add guest
      </Button>
    </View>
  );
};

export default function AddEvent() {
  return (
    <View style={styles.container}>
      <StyledParagraph>Event type</StyledParagraph>
      <Section>
        <View style={styles.space}>
          <EventChip title="Place to stay" />
          <EventChip title="Get together" />
        </View>
        <View style={styles.space}>
          <EventChip title="City tour" />
          <EventChip title="Classes" />
        </View>
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
    </View>
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
  },
  space: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
