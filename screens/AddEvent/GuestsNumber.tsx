import React, { useContext } from 'react';
import styled from 'styled-components';
import { IconButton } from "react-native-paper";

import { ViewRow } from '../../components/Layout/Views';
import { ThemeContext } from '../../ThemeContext';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function GuestsNumber (props: Props) {
  const { primaryColor } = useContext(ThemeContext);
  const [numberOfGuests, setNumberOfGuests] = React.useState(0);

  React.useEffect(() => {
    props.onChange(numberOfGuests)
  }, [numberOfGuests])

  const removeGuest = () => {
    if (numberOfGuests > 0) setNumberOfGuests(numberOfGuests - 1);
  };

  const addGuest = () => {
    setNumberOfGuests(numberOfGuests + 1);
  };

  const buttonStyle = {
    width: 60,
    height: 46,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: primaryColor,
    borderRadius: 100,
    color: primaryColor,
  };

  return (
    <ViewRow>
      <IconButton style={buttonStyle} icon="minus" mode="outlined" onPress={removeGuest} />
        <Counter>{numberOfGuests}</Counter>
      <IconButton style={buttonStyle} icon="plus" mode="outlined" onPress={addGuest} />
    </ViewRow>
  );
};

const Counter = styled.div`
  margin: auto 20px;
`;
