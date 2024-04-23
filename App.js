/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import awsmobile from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import {Provider as PaperProvider} from 'react-native-paper';

import Router from './src/router';
Amplify.configure(awsmobile);
//Auth.currentCredentials().then(creds => console.log(creds));
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <View style={styles.background}>
          <StatusBar barStyle="light-content" />
          <Router />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

const signUpConfig = {
  header: 'Registrace',
  hiddenAllDefaults: true,
  signUpFields: [
    {
      label: 'Celé jméno',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Heslo',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
    },
  ],
};
export default withAuthenticator(App, {signUpConfig});
//aws iot attach-principal-policy --policy-name 'PubSub_policy' --principal 'eu-central-1:889d0837-ee64-4d83-be2f-a456c543929d'
// aws iot attach-policy --policy-name 'PubSub_policy' --target 'eu-central-1:8b78f2fb-a607-409a-8b86-fdae03855acd'