import React, { useState } from "react";
import styled from "styled-components/native";

import { ViewContainerScroll, ViewSpace } from "../../components/Layout/Views";
import { EventType } from "./EventType";
import { Input } from "../../components/Input";
import { StyledButtonContained } from "../../components/Button";
import { DatePicker } from "../../components/DatePicker";
import { GuestsNumber } from "./GuestsNumber";

import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../graphql/mutations";
import { NavigationRouteContext } from "@react-navigation/native";

export default function AddEvent({ navigation}: {navigation: any}) {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const [addEventMutation, addResponse] = useMutation(ADD_EVENT, {
    onCompleted({ addEvent }) {
      console.log({ addEvent });
      navigation.navigate('Listing');
    },
  });

  const onSaveEvent = () => {
    // TODO: validate

    addEventMutation({
      variables: {
        name,
        eventType: { name: eventType },
        location: { city, country },
        maxPeople: maxGuests,
        dateFrom: "2021-01-20",
        dateTo: "2021-08-21",
        description,
        details,
      },
    });
  };

  return (
    <ViewContainerScroll>
      <StyledParagraph>Event type</StyledParagraph>
      <Section>
        <ViewSpace>
          <EventType
            title="Place to stay"
            selectedEventType={eventType}
            setValue={setEventType}
          />
          <EventType
            title="Remote work"
            selectedEventType={eventType}
            setValue={setEventType}
          />
        </ViewSpace>
        <ViewSpace>
          <EventType
            title="City tour"
            selectedEventType={eventType}
            setValue={setEventType}
          />
          <EventType
            title="Classes"
            selectedEventType={eventType}
            setValue={setEventType}
          />
        </ViewSpace>
      </Section>

      <Section>
        <Input
          label="Event name"
          placeholder="How would you like to call your event?"
          value={name}
          onChange={(value) => setName(value)}
        />
      </Section>

      <Section>
        <Input
          label="Country"
          placeholder="E.g. Netherlands, United States, Spain"
          value={country}
          onChange={(value) => setCountry(value)}
        />
      </Section>

      <Section>
        <Input
          label="City"
          placeholder="In which city will the event take place?"
          value={city}
          onChange={(value) => setCity(value)}
        />
      </Section>

      <StyledParagraph>Date available</StyledParagraph>
      <Section>
        <DatePicker />
      </Section>

      <StyledParagraph>Maximum number of guests</StyledParagraph>
      <Section>
        <GuestsNumber
          value={maxGuests}
          onChange={(value) => setMaxGuests(value)}
        />
      </Section>

      <Section>
        <Input
          label="Event description"
          value={description}
          placeholder="What is happening?"
          onChange={(value) => setDescription(value)}
          multiline
        />
      </Section>

      <Section>
        <Input
          label="Event details"
          value={details}
          placeholder="Any important details?"
          onChange={(value) => setDetails(value)}
          multiline
        />
      </Section>

      <StyledButtonContained title="Add event" onPress={onSaveEvent} />
    </ViewContainerScroll>
  );
}

const StyledParagraph = styled.Text`
  margin: 0 0 8px 0;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

const Section = styled.View`
  margin-bottom: 20px;
`;
