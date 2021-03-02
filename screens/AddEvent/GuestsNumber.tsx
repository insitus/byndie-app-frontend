import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from "react-native-paper";

import { ViewRow } from '../../components/Layout/Views';
import { ThemeContext } from '../../ThemeContext';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function GuestsNumber (props: Props) {
  const { primaryColor } = useContext(ThemeContext);

  const buttonStyle = {
    width: 60,
    height: 46,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: primaryColor,
    borderRadius: 100,
  };

  return (
    <ViewRow>
      <Button style={buttonStyle} icon="minus" mode="outlined" onPress={() => props.onChange(props.value - 1)} >{''}</Button>
        <Counter>{props.value}</Counter>
      <Button style={buttonStyle} icon="plus" mode="outlined" onPress={() => props.onChange(props.value + 1)}>{''}</Button>
    </ViewRow>
  );
};

const Counter = styled.div`
  margin: auto 20px;
`;
