import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../styles';
import CustomButton from '../components/Buttons/customButton';
import CustomInput from '../components/CustomInput';
import GoBack from '../components/Buttons/backButton';
import {useNavigation} from '@react-navigation/native';
import NumberIcon from '../components/NumberIcon';

import {DataStore} from 'aws-amplify';
import {CreateDHT} from '../models';
const CreateTemperatureHumidityScreen = () => {
  const [dhtID, setDHTID] = useState('');
  const [dhtTitle, setDHTTitle] = useState('');
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('chooseSensor');
  };
  async function Submit() {
    if (!dhtID) {
      Alert.alert('Prosím zadejte číslo zařízení');
      return;
    }
    if (!dhtTitle) {
      Alert.alert('Prosím zadejte název');
      return;
    }

    await DataStore.save(new CreateDHT({dhtID, dhtTitle}));
    setDHTID('');
    setDHTTitle('');
    navigation.navigate('home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <GoBack onPress={back} />
      <View style={styles.center}>
        <Text style={styles.title}>Teplota & Vlhost</Text>
        <View style={styles.left}>
          <View style={styles.first}>
            <NumberIcon text="1" color="#39DCD7" />
            <Text style={styles.firstText}>
              Připojte svoje zařízení k napájení.
            </Text>
          </View>
          <View style={styles.first}>
            <NumberIcon text="2" color="#46C6E4" />
            <Text style={[styles.firstText, {color: '#46C6E4'}]}>
              Opište číslo zařízení{' '}
            </Text>
          </View>
          <View style={styles.first}>
            <NumberIcon text="3" color="#72AAF3" />
            <Text style={[styles.firstText, {color: '#72AAF3'}]}>
              Pojmenujte si ho (Teplota v pokoji){' '}
            </Text>
          </View>
        </View>
        <CustomInput
          placeholder="Číslo zařízení"
          setValue={setDHTID}
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={2}
        />
        <CustomInput
          placeholder="Název"
          setValue={setDHTTitle}
          autoCapitalize="sentences"
          maxLength={20}
        />
        <CustomButton text="Potvrdit" onPress={Submit} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: Dimensions.get('window').height,
  },
  center: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  left: {
    justifyContent: 'flex-start',
  },
  first: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  firstText: {
    color: '#39DCD7',
    fontWeight: '500',
  },

  label: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
});

export default CreateTemperatureHumidityScreen;
