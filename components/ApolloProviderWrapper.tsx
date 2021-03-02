import React, { createContext, useContext } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"

const retrieveToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) return;

  return token;
}

export const ApolloCtx = createContext({} as any);

export const useApolloContext = () => useContext(ApolloCtx);

const { Provider } = ApolloCtx;

export const ApolloProviderWrapper: React.FC = ({ children }) => {
  const [localToken, setLocalToken] = useState(retrieveToken());

  useEffect(() => {
    console.log({ localToken} );
  }, [localToken]);

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: localToken ? `Bearer ${localToken}` : "",
    }
  });

  return <Provider value={{ setLocalToken }}><ApolloProvider client={client}>{children}</ApolloProvider></Provider>;

}