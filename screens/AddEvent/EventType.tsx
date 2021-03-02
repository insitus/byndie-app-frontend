import React, { useState } from 'react';
import { Chip } from 'react-native-paper';

interface Props {
  title: string;
  icon?: string;
  setValue: (title: string) => void;
  selectedEventType: string;
}

export const EventType = (props: Props) => {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <Chip
      selected={props.selectedEventType === props.title}
      onPress={() => { 
        // setIsSelected(prevCheck => !prevCheck)
        props.setValue(props.title)
      }}>
      {props.title}
    </Chip>
  );
};
