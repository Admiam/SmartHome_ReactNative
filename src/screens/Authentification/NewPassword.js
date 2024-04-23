// import React, {useState} from 'react';
// import {View, StyleSheet, SafeAreaView, Text, Alert} from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/Buttons/customButton';
// import {useNavigation} from '@react-navigation/native';
// import {colors} from '../../styles';
// import {useForm} from 'react-hook-form';
// import {Auth} from 'aws-amplify';

// const NewPassword = () => {
//   const {control, handleSubmit} = useForm();

//   const navigation = useNavigation();

//   const Submit = async data => {
//     try {
//       await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
//       navigation.navigate('signIn');
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
//         <Text style={styles.title}>Změna hesla</Text>
//         <CustomInput
//           placeholder="Uživatelské jméno"
//           name="username"
//           autoCapitalize="none"
//           control={control}
//           rules={{required: 'Je potřeba zadat uživatelské jméno'}}
//         />
//         <CustomInput
//           placeholder="Ověřovací kód"
//           name="code"
//           control={control}
//           autoCapitalize="none"
//           rules={{required: 'Je potřeba zadat ověřovací kód'}}
//         />
//         <CustomInput
//           placeholder="Zadejte nové heslo"
//           name="password"
//           control={control}
//           autoCapitalize="none"
//           secureTextEntry
//           rules={{
//             required: 'Je potřeba zadat heslo',
//             minLength: {
//               value: 8,
//               message: 'Heslo musí obsahovat aspoň 8 znaků',
//             },
//           }}
//         />

//         <CustomButton text="Potvrdit" onPress={handleSubmit(Submit)} />

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
// export default NewPassword;
