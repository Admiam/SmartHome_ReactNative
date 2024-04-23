import {View, Pressable, StyleSheet, Text, Alert} from 'react-native';
import React from 'react';
import Temp from './sensorDHTTemperature';
import Humidity from './sensorHumidity';
import {colors} from '../../../styles';

import {DataStore} from 'aws-amplify';

const SensorDHT = ({dht}) => {
  const deletePressed = () =>
    Alert.alert(
      'Odstranit zařízení',
      `Opravdu chcete odstratnit zařízení? ${dht.dhtTitle}`,
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
              await DataStore.delete(dht);
            } catch (e) {
              console.log('Delete failed: $e');
            }
          },
        },
      ],
    );
  return (
    <View>
      <Pressable onLongPress={deletePressed} style={styles.dht}>
        <Text style={styles.name}>{dht.dhtTitle}</Text>
        <View style={styles.text}>
          <Humidity name={dht.dhtID} style={styles.humi} />
          <Temp name={dht.dhtID} style={styles.temp} />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  dht: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 110,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    color: colors.white,
    fontSize: 14,
  },
  left: {},
  humi: {},
});

export default SensorDHT;
/*
# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
type CreateTemperature @model {
  id: ID!
  deviceId: String!
  sensorTitle: String!
}
type CreateDHT @model {
  id: ID!
  deviceId: String!
  sensorTitle: String!
}
type CreateLamp @model {
  id: ID!
  deviceId: String!
  sensorTitle: String!
}*/
