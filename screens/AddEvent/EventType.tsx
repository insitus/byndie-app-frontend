import React, { useState } from 'react';
import { Chip } from 'react-native-paper';

import { IEventType } from '../../types';

interface Props {
  title: IEventType;
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
      }}
      mode="outlined"
      style={{backgroundColor: '#fff', color: '#002233', borderColor: '' }}
    >
      {props.title}
    </Chip>
  );
};
