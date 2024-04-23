import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import GoBack from '../components/Buttons/backButton';
import NotificationMsg from '../components/NotificationMsg';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <GoBack onPress={back} />
      <View>
        <Text style={styles.title}>Notification</Text>
        <NotificationMsg style={styles.notification} />
        <View>
          <Avatar
            size={50}
            rounded
            icon={{name: 'lamp'}}
            containerStyle={{backgroundColor: colors.primaryLight}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: Dimensions.get('window').height,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default NotificationScreen;
