import React, { useState } from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { StyledButtonOutlined } from "../components/Button";

export const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<any>("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View>
      <View>
        <StyledButtonOutlined onPress={showDatepicker} title="Select date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
