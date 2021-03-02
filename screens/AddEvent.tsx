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


import { Text, View } from "../components/Themed";

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
      <Button icon="minus" mode="outlined" onPress={removeGuest}>Remove guest</Button>
      <NumberOfGuestsCounter>{numberOfGuests}</NumberOfGuestsCounter>
      <Button icon="plus" mode="outlined" onPress={addGuest}>Add guest</Button>
    </View>
  );
};

export default function AddEvent() {
  return (
    <View style={styles.container}>
      <Paragraph>Event type</Paragraph>
      <Section>
        <View style={styles.row}>
          <EventChip title="Place to stay" />
          <EventChip title="Get together" />
          <EventChip title="City tour" />
          <EventChip title="Classes" />
        </View>
      </Section>

      <Paragraph>Event type</Paragraph>
      <Section>
        <EventName />
      </Section>

      <Paragraph>Event Name</Paragraph>
      <Section>
        <EventLocation />
      </Section>

      <Paragraph>Maximum number of guests</Paragraph>
      <Section>
        <EventNumberOfGuests />
      </Section>

      <Paragraph>Event description</Paragraph>
      <Section>
        <TextInput multiline />
      </Section>

      <Button mode="contained" onPress={() => console.log("Pressed")}>
        Add event
      </Button>
    </View>
  );
}

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
});
