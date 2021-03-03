import React from 'react';
import styled from 'styled-components';
import { TextInput } from "react-native-paper";

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  onChange?: (value: string) => void;
}

export function Input (props: Props) {
  return (
    <>
      <Label>{props.label}</Label>
      <TextInput mode="outlined" value={props.value} placeholder={props.placeholder} onChangeText={props.onChange} multiline={props.multiline} />
    </>
  )
}

const Label = styled.span`
  margin-bottom: 8px;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;
