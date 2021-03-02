import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"

const retrieveToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) return;

  return token;
}

export const ApolloProviderWrapper: React.FC = ({ children }) => {
  const [localToken, setLocalToken] = useState(retrieveToken());

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: localToken ? `Bearer ${localToken}` : "",
    }
  });



  return <ApolloProvider client={client}>{children}</ApolloProvider>;

}