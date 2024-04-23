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
import {CreateLamp} from '../models';

const CreateLampScreen = () => {
  const [lampID, setLampID] = useState('');
  const [lampTitle, setLampTitle] = useState('');

  const navigation = useNavigation();

  const back = () => {
    navigation.navigate('chooseSensor');
  };
  async function Submit() {
    if (!lampID) {
      Alert.alert('Prosím zadejte číslo zařízení');
      return;
    }
    if (!lampTitle) {
      Alert.alert('Prosím zadejte název');
      return;
    }

    await DataStore.save(
      new CreateLamp({
        lampID,
        lampTitle,
      }),
    );
    setLampID('');
    setLampTitle('');
    navigation.navigate('home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <GoBack onPress={back} />
      <View style={styles.center}>
        <Text style={styles.title}>Lampa</Text>
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
              Pojmenujte si ho (Lampa v ložnici){' '}
            </Text>
          </View>
        </View>
        <CustomInput
          placeholder="Číslo zařízení"
          setValue={setLampID}
          autoCapitalize="none"
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
        />
        <CustomInput
          placeholder="Název"
          setValue={setLampTitle}
          autoCapitalize="sentences"
          style={styles.input}
          maxLength={18}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  center: {
    alignItems: 'center',
    padding: 20,
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
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.white,
  },
});

export default CreateLampScreen;
