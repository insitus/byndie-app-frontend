import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { ApolloProviderWrapper } from './components/ApolloProviderWrapper';
import { ThemeContext, theme } from './ThemeContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProviderWrapper>
        <SafeAreaProvider>
          <ThemeContext.Provider value={theme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ThemeContext.Provider>
        </SafeAreaProvider>
      </ApolloProviderWrapper>
    );
  }
}
