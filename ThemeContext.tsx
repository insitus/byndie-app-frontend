import { createContext } from 'react';
import { TextStyle } from 'react-native';

interface Theme {
  header: TextStyle;
}

export const theme: Theme = {
  header: {
    fontFamily: 'Source Sans Pro',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 41,
  }
};

export const ThemeContext = createContext(theme);
