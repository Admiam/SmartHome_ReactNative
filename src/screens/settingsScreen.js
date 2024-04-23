import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import GoBack from '../components/Buttons/backButton';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/Buttons/customButton';
import {Auth} from 'aws-amplify';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('home');
  };

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <GoBack onPress={back} />
      <View style={styles.center}>
        <Text style={styles.title}>Nastavení</Text>
        <CustomButton
          style={styles.button}
          text="Odhlásit se"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  center: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SettingsScreen;
