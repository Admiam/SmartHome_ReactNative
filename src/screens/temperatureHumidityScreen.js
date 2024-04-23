import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import GoBack from '../components/Buttons/backButton';
import {colors} from '../styles';

const TemperatureHumidityScreen = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <GoBack onPress={back} />
        <Text>Hello Temperature screen</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: Dimensions.get('window').height,
  },
});

export default TemperatureHumidityScreen;
/*
  import awsmobile from '../aws-exports';
  import Amplify from 'aws-amplify';

  import {Auth} from 'aws-amplify';
  import {DynamoDB} from '@aws-sdk/client-dynamodb';

  Amplify.configure(awsmobile);

  // Apply plugin with configuration
  // Parameters to scan the DynamoDB table
  // Use datumVal to scan 24 hours of previous data
  var datumVal = new Date();
  var params = {
    TableName: 'sensors_data',
    KeyConditionExpression: '#id = :iottopic and #ts >= :datum',
    ExpressionAttributeNames: {
      '#id': 'device_id',
      '#ts': 'sample_time',
    },
    ExpressionAttributeValues: {
      ':iottopic': {S: '1'},
      ':datum': {N: datumVal.toString()},
    },
  };
  Auth.currentCredentials().then(credentials => {
    const db = new DynamoDB({
      region: 'eu-central-1',
      credentials: Auth.essentialCredentials(credentials),
    });
    db.query(params, function (err, data) {
      if (err) {
        console.warn(err);
        return null;
      } else {
        console.warn('Got data');
        console.warn(data);
        for (var i in data.Items) {
          // read the values from the dynamodb JSON packet
          var tempRead = parseFloat(data.Items[i].temperature.N);
          var timeStamp = parseInt(data.Items[i].ts.N);
          var timeRead = new Date(timeStamp);
          console.log(timeRead);
          console.log(tempRead);
          }
        }
      });
    });
    */
