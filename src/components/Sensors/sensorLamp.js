import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {PubSub} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub/lib/Providers';
import {DataStore} from 'aws-amplify';

Amplify.configure(awsmobile);

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'eu-central-1',
    aws_pubsub_endpoint:
      'wss://a311s9u24xexzs-ats.iot.eu-central-1.amazonaws.com/mqtt',
  }),
);
const Lamp = ({lampItem}) => {
  const [isOn, setIsOn] = useState(false);
  const navigation = useNavigation();
  const toggleSwitch = () => setIsOn(previousState => !previousState);

  PubSub.configure();
  if (isOn) {
    console.log('is on');
    PubSub.publish(`device/${lampItem.lampID}/sub`, {
      lamp: 'on',
      red: Number(lampItem.red),
      green: Number(lampItem.green),
      blue: Number(lampItem.blue),
    });
  } else {
    console.log('is off');
    PubSub.publish(`device/${lampItem.lampID}/sub`, {
      lamp: 'off',
      red: 0,
      green: 0,
      blue: 0,
    });
  }
  const goScreen = () => {
    navigation.navigate('lamp', {id: lampItem.id});
  };
  const deletePressed = () =>
    Alert.alert(
      'Odstranit zařízení',
      `Opravdu chcete odstratnit zařízení ${lampItem.lampTitle}`,
      [
        {
          text: 'Zrušit',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await DataStore.delete(lampItem);
            } catch (e) {
              console.log('Delete failed: $e');
            }
          },
        },
      ],
    );

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          {
            borderColor: `rgb(${lampItem.red},${lampItem.green},${lampItem.blue})`,
          },
          isOn
            ? {backgroundColor: colors.primaryOn}
            : {backgroundColor: colors.primary},
        ]}
        onPress={toggleSwitch}
        onLongPress={() => {
          deletePressed(lampItem);
        }}
        value={isOn}>
        <Text style={styles.buttonText}>{lampItem.lampTitle}</Text>
        <Pressable onPress={goScreen} style={styles.arrowButton}>
          <Icon name="keyboard-arrow-right" size={30} color={colors.white} />
        </Pressable>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 110,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    borderWidth: 0.5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  arrowButton: {
    padding: 5,
    alignSelf: 'flex-end',
  },
});
export default Lamp;
//eu-central-1:70166295-b918-4b2d-a404-45573516d8ac
