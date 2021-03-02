import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { USER_REGISTER } from '../graphql/mutations';

import { Text, View } from '../components/Themed';
import { useMutation } from '@apollo/client';

export default function Register({ navigation }) {
  const [userEmail, setUserEmail] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');
  const [registrationError, setRegistrationError] = React.useState(false);
  const [userPassword, setUserPassword] = React.useState<string>('');

  const [inProgress, setInProgress] = React.useState(false);
  const [validationWarning, setValidationWarning] = React.useState(false);

  const [register] = useMutation(USER_REGISTER, {
    onError({ graphQLErrors }) {
      setInProgress(false);
      if (graphQLErrors) {
        setRegistrationError(true);
      }
    },
    onCompleted({ register: _register }) {
      setInProgress(false);
      if (_register.id) {
        navigation.pop();
      }
    }
  });

  const onPressDoRegister = () => {
    if (!userEmail || !userPassword) {
      setValidationWarning(true);
      return;
    };
    setInProgress(true);
    const localUserName = !userName ? userEmail : userName;

    register({ variables: { username: localUserName, email: userEmail, password: userPassword } })
  }

  const onUserNameTextChange = (value: string) => {
    setUserName(value);
  }

  const onEmailTextChange = (value: string) => {
    setUserEmail(value);
  }

  const onPasswordTextChange = (value: string) => {
    setUserPassword(value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{validationWarning ? 'Email or password cannot be empty' : 'Register with your account'}</Text>
      <TextInput
        label="Username"
        value={userName}
        onChangeText={onUserNameTextChange}
        style={styles.input}
      />
      <TextInput
        error={validationWarning}
        label="Email"
        value={userEmail}
        onChangeText={onEmailTextChange}
        style={styles.input}
      />
      <TextInput
        error={validationWarning}
        secureTextEntry={true}
        label="Password"
        value={userPassword}
        onChangeText={onPasswordTextChange}
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
      {registrationError && <Text>There were some errors during registration, please try again.</Text>}
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
