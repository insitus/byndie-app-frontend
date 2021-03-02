import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Text, View } from '../components/Themed';

export default function Register({ navigation }) {
  const [userEmail, setUserEmail] = React.useState();
  const [userPassword, setUserPassword] = React.useState();
  const [inProgress, setInProgress] = React.useState(false);

  const onPressDoRegister = () => {
    setInProgress(true);
    console.log('Send query...');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register with your Bynder email</Text>
      <TextInput
        label="Email"
        value={userEmail}
        onChangeText={(value) => setUserEmail(value)}
        style={styles.input}
      />
      <TextInput
        secureTextEntry={true}
        label="Password"
        value={userPassword}
        onChangeText={(value) => setUserPassword(value)}
        style={styles.input}
      />
      <Button
        compact
        loading={inProgress}
        mode="contained"
        onPress={onPressDoRegister}
        accessibilityLabel="Register"
      >
        Register
      </Button>
      <Button
        compact
        onPress={() => navigation.navigate('Login')}
        accessibilityLabel="Log in"
      >
        Back to Login
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
  },
});
