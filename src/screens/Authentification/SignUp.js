// import React, {useState} from 'react';
// import {View, StyleSheet, SafeAreaView, Text, Alert} from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/Buttons/customButton';
// import {useNavigation} from '@react-navigation/native';
// import {colors} from '../../styles';
// import {useForm} from 'react-hook-form';
// import {Auth} from 'aws-amplify';

// const EMAIL_REGEX =
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const SignUp = () => {
//   const {control, handleSubmit, watch} = useForm();
//   const pwd = watch('password');
//   const navigation = useNavigation();

//   const Register = async data => {
//     const {username, password, email, name} = data;
//     try {
//       await Auth.signUp({
//         username,
//         password,
//         attributes: {email, name, preferred_username: username},
//       });

//       navigation.navigate('confirmEmail', {username});
//     } catch (e) {
//       Alert.alert('Oops', e.message);
//     }
//   };

//   const SignIn = () => {
//     navigation.navigate('signIn');
//   };

//   const TermsOfUse = () => {
//     console.warn('onTermsOfUsePressed');
//   };

//   const Privacy = () => {
//     console.warn('onPrivacyPressed');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.root}>
//         <Text style={styles.title}>Vytvořte si účet</Text>
//         <CustomInput
//           name="name"
//           control={control}
//           placeholder="Jméno"
//           rules={{
//             required: 'Je potřeba zadat jméno',
//             minLength: {
//               value: 3,
//               message: 'Jméno musí obsahovat aspoň 3 znaky',
//             },
//             maxLength: {
//               value: 25,
//               message: 'Jému musí obsahovat maximálně 25 znaků',
//             },
//           }}
//         />

//         <CustomInput
//           name="username"
//           placeholder="Uživatelské jméno"
//           autoCapitalize="none"
//           rules={{
//             required: 'Je potřeba doplnit uživatelské jméno',
//             minLength: {
//               value: 3,
//               message: 'Uživatelské jméno musí obsahovat aspoň 3 znaky',
//             },
//             maxLength: {
//               value: 25,
//               message: 'Uživatelské jméno musí obsahovat maximálně 25 znaků',
//             },
//           }}
//         />
//         <CustomInput
//           name="email"
//           control={control}
//           placeholder="Email"
//           autoCapitalize="none"
//           rules={{
//             required: 'Je potřeba zadat email',
//             pattern: {value: EMAIL_REGEX, message: 'Nesprávný email'},
//           }}
//         />
//         <CustomInput
//           name="password"
//           control={control}
//           placeholder="Heslo"
//           autoCapitalize="none"
//           secureTextEntry
//           rules={{
//             required: 'Je potřeba zadat helso',
//             minLength: {
//               value: 8,
//               message: 'Heslo musí obsahovat aspoň 8 znaků',
//             },
//           }}
//         />
//         <CustomInput
//           name="password-repeat"
//           control={control}
//           placeholder="Ověření hesla"
//           autoCapitalize="none"
//           secureTextEntry
//           rules={{
//             validate: value => value === pwd || 'Heslo se neschoduje',
//           }}
//         />
//         <CustomButton text="Register" onPress={handleSubmit(Register)} />
//         <Text style={styles.text}>
//           By registering, you confirm that you accept our{' '}
//           <Text style={styles.link} onPress={TermsOfUse}>
//             Terms of Use
//           </Text>{' '}
//           and{' '}
//           <Text style={styles.link} onPress={Privacy}>
//             Privacy Policy
//           </Text>
//         </Text>
//         <CustomButton
//           text="Už máte učet? Přihlaste se."
//           onPress={SignIn}
//           type="THIRD"
//         />
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
// export default SignUp;
