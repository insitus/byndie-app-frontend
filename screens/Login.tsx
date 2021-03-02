import { useMutation, useQuery, gql } from '@apollo/client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useApolloContext } from '../components/ApolloProviderWrapper';
import { Text, View } from '../components/Themed';
import { ADD_HEALTH, USER_SIGNIN } from '../graphql/mutations';

const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [inProgress, setInProgress] = React.useState(false);
  const [disableAction, setDisableAction] = React.useState(false);
  const { setLocalToken } = useApolloContext();


  const healthCheck = useQuery(gql`
    query {
      healthcheck {
        message
      }
    }
  `
  )

  console.log({ healthCheck: healthCheck.data })

  const [login, { data }] = useMutation(USER_SIGNIN, {
    onCompleted({ login: _login }) {
      console.log({ _login })
      if (_login) {
        AsyncStorage.setItem('token', _login.accessToken as string);
        setLocalToken(_login.accessToken);
      }
    }
  });

  const [protectedHealthcheckAdd, healthResponse] = useMutation(ADD_HEALTH, {
    onCompleted({ addHealthCheck }) {
      console.log({ addHealthCheck });
    }
  });


  const onChangeUserEmailText = (inputEmail: string) => {
    setDisableAction(false);
    setUserEmail(inputEmail);
  }

  const onChangePasswordText = (inputPassword: string) => {
    setUserPassword(inputPassword);
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
        onPress={() => login({ variables: { username: userEmail, password: userPassword } })}
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
      <Button
        compact
        onPress={() => protectedHealthcheckAdd()}
        accessibilityLabel="Protected health check"
      >
        Add Healthcheck (protected)
        </Button>
    </View>
  );
}

export default Login;

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
