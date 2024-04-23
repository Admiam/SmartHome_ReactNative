import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';

import TemperatureHumidityScreen from '../screens/temperatureHumidityScreen';
import LampScreen from '../screens/lampScreen';

import CreateLampScreen from '../screens/createLampScreen';
import CreateTemperatureHumidityScreen from '../screens/createTemperatureHumidityScreen';

import SettingsScreen from '../screens/settingsScreen';
import ChooseSensorScreen from '../screens/chooseSensorScreen';
import NotificationScreen from '../screens/notificationScreen';

// import SignIn from '../screens/Authentification/SignIn';
// import SignUp from '../screens/Authentification/SignUp';
// import ForgotPassword from '../screens/Authentification/ForgotPassword';
// import NewPassword from '../screens/Authentification/NewPassword';
// import ConfirmEmail from '../screens/Authentification/ConfirmEmail';
// import {Auth, Hub} from 'aws-amplify';

const Stack = createNativeStackNavigator();

const Router = () => {
  /*
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
*/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="home" screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name="home" />
        <Stack.Screen
          component={TemperatureHumidityScreen}
          name="temperatureHumidity"
        />
        <Stack.Screen component={LampScreen} name="lamp" />

        <Stack.Screen component={CreateLampScreen} name="createLamp" />
        <Stack.Screen
          component={CreateTemperatureHumidityScreen}
          name="createTemperatureHumidity"
        />
        <Stack.Screen component={SettingsScreen} name="settings" />
        <Stack.Screen component={ChooseSensorScreen} name="chooseSensor" />
        <Stack.Screen component={NotificationScreen} name="notifications" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
