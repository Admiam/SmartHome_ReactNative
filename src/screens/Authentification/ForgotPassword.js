// import React, {useState} from 'react';
// import {View, Alert, StyleSheet, SafeAreaView, Text} from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/Buttons/customButton';
// import {useNavigation} from '@react-navigation/native';
// import {colors} from '../../styles';
// import {useForm} from 'react-hook-form';
// import {Auth} from 'aws-amplify';

// const ConfirmEmail = () => {
//   const {control, handleSubmit} = useForm();
//   const navigation = useNavigation();

//   const Send = async data => {
//     try {
//       await Auth.forgotPassword(data.username);
//       navigation.navigate('newPassword');
//     } catch (e) {
//       Alert.alert('Oops', e.message);
//     }
//   };

//   const SignIn = () => {
//     navigation.navigate('signIn');
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.root}>
//         <Text style={styles.title}>Zapomenuté heslo</Text>
//         <CustomInput
//           name="username"
//           control={control}
//           placeholder="Uživatelské jméno"
//           autoCapitalize="none"
//           rules={{
//             required: 'Je potřeba zadat uživatelské jméno',
//           }}
//         />
//         <CustomButton text="Poslat" onPress={Send} />

//         <CustomButton text="Zpět na přihlášení" onPress={SignIn} type="THIRD" />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     color: colors.white,
//     fontWeight: 'bold',
//     fontSize: 24,
//     padding: 20,
//   },
//   text: {
//     color: 'gray',
//     marginVertical: 10,
//   },
//   link: {
//     color: '#FDB075',
//   },
// });
// export default ConfirmEmail;
