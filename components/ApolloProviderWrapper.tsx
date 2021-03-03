import React, { createContext, useContext } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"

const retrieveToken = async (): Promise<string> => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    return token;
  }

  return "";
}

export const ApolloCtx = createContext({} as any);

export const useApolloContext = () => useContext(ApolloCtx);

const { Provider } = ApolloCtx;

export const ApolloProviderWrapper: React.FC = ({ children }) => {
  const [localToken, setLocalToken] = useState<string>();

  useEffect(() => {
    const localTokenPromise = async () => {
      const token = await retrieveToken();

      if (token) {
        setLocalToken(token);
      }
    }

    localTokenPromise();
  }, []);

  const client = new ApolloClient({
    // uri: 'http://localhost:3000/graphql',
    uri: 'https://byndie-app-server.herokuapp.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: localToken ? `Bearer ${localToken}` : "",
    }
  });

  return <Provider value={{ setLocalToken, localToken }}><ApolloProvider client={client}>{children}</ApolloProvider></Provider>;
}
