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
      selected={isSelected}
      onPress={() => setIsSelected(prevCheck => !prevCheck)}
    >
      {props.title}
    </Chip>
  );
};
