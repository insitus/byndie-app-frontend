import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Text, View } from '../components/Themed';

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [inProgress, setInProgress] = React.useState(false);
  const [disableAction, setDisableAction] = React.useState(false);

  const onChangeUserEmailText = (inputEmail: string) => {
    setDisableAction(false);
    setUserEmail(inputEmail);
  }

  const onChangePasswordText = (inputPassword: string) => {
    setUserPassword(inputPassword);
  }

  const onPressDoLogin = () => {
    // do proper email validation here
    if (!userEmail.includes('@bynder.com')) {
      setDisableAction(true);
    } else {
      setInProgress(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Onboard</Text>
      <TextInput
        disabled={inProgress}
        label="Email"
        value={userEmail}
        onChangeText={onChangeUserEmailText}
        style={styles.input}
      />
      <TextInput
        disabled={inProgress}
        secureTextEntry={true}
        label="Password"
        value={userPassword}
        onChangeText={onChangePasswordText}
        style={styles.input}
      />
      <Button
        disabled={disableAction}
        mode="contained"
        loading={inProgress}
        onPress={onPressDoLogin}
        accessibilityLabel="LogIn"
      >
        Log in
      </Button>
      <Button
        compact
        onPress={() => navigation.navigate('Register')}
        accessibilityLabel="Register"
      >
        Register
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
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
  },
});
