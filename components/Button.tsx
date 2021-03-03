import React, { useContext } from "react";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { ThemeContext } from "../ThemeContext";

interface Props {
  title?: string;
  onPress?: any;
  mode?: string;
}

export function StyledButtonContained(props: Props) {
  const { primaryColor } = useContext(ThemeContext);

  const theme: any = {
    ...DefaultTheme,
    colors: {
      primary: primaryColor,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Button mode="contained" onPress={props.onPress} dark>
        {props.title}
      </Button>
    </PaperProvider>
  );
}


export function StyledButtonOutlined(props: Props) {
  const { primaryColor } = useContext(ThemeContext);

  const theme: any = {
    ...DefaultTheme,
    colors: {
      primary: primaryColor,
    },
  };

  const PrimaryButtonOutlinedStyle: any = {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: primaryColor,
    borderRadius: 100,
    color: primaryColor,
  };

  return (
    <PaperProvider theme={theme}>
      <Button dark  mode="outlined" icon="calendar" onPress={props.onPress} style={PrimaryButtonOutlinedStyle}>
        {props.title}
      </Button>
    </PaperProvider>
  );
}
