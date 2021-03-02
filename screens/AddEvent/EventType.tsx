import React, { useState } from 'react';
import { Chip } from 'react-native-paper';

interface Props {
  title: string;
  icon?: string;
}

export const EventType = (props: Props) => {
  const [isSelected, setIsSelected] = useState(false);

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
