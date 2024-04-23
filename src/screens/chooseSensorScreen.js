import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import GoBack from '../components/Buttons/backButton';
import {useNavigation} from '@react-navigation/native';

const ChooseSensorScreen = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('home');
  };
  const onLamp = () => {
    navigation.navigate('createLamp');
  };
  const onTemperatureHumidity = () => {
    navigation.navigate('createTemperatureHumidity');
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBack onPress={back} />
      <Pressable style={styles.button} onPress={onLamp}>
        <Text style={styles.lightText}>Lampa</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onTemperatureHumidity}>
        <View style={styles.humi}>
          <Text style={styles.humiText}>Teplota</Text>
          <Text style={styles.humiText}>&</Text>
          <Text style={styles.humiText}>Vlhkost</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: Dimensions.get('window').height,
  },
  back: {
    color: colors.white,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    height: 100,
    width: Dimensions.get('window').width - 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  lightText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  tempText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  humi: {
    flexDirection: 'column',
  },
  humiText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChooseSensorScreen;
