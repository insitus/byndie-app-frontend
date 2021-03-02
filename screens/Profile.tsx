import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useApolloContext } from '../components/ApolloProviderWrapper';


import { Text, View } from '../components/Themed';

export default function Profile() {
  const { setLocalToken } = useApolloContext();

  const removeToken = async () => {
    setLocalToken(null);
    return await AsyncStorage.removeItem('token');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button
        disabled={false}
        mode="contained"
        loading={false}
        onPress={removeToken}
        accessibilityLabel="LogOut"
      >
        Log out
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
