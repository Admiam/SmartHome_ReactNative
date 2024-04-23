// import React, {useState} from 'react';
// import {
//   View,
//   Alert,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   Dimensions,
// } from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import SubmitButton from '../../components/Buttons/submitButton';
// import {useNavigation} from '@react-navigation/native';
// import {colors} from '../../styles';
// import CustomButton from '../../components/Buttons/customButton';
// import {useForm} from 'react-hook-form';
// import {useRoute} from '@react-navigation/native';
// import {Auth} from 'aws-amplify';

// const {width} = Dimensions.get('window');
// const {height} = Dimensions.get('window');

// const ConfirmEmail = () => {
//   const route = useRoute();
//   const {control, handleSubmit, watch} = useForm({
//     defaultValues: {username: route?.params?.username},
//   });

//   const username = watch('username');

//   const navigation = useNavigation();
//   const Confirm = async data => {
//     try {
//       await Auth.confirmSignUp(data.username, data.code);
//       navigation.navigate('signIn');
//     } catch (e) {
//       Alert.alert('Jejda', e.message);
//     }
//   };

//   const SignIn = () => {
//     navigation.navigate('signIn');
//   };

//   const Resend = async () => {
//     try {
//       await Auth.resendSignUp(username);
//       Alert.alert('Success', 'Code was resent to your email');
//     } catch (e) {
//       Alert.alert('Jejda', e.message);
//     }
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.root}>
//         <Text style={styles.title}>Confirm your email</Text>
//         <CustomInput
//           placeholder="Uživatelské jméno"
//           control={control}
//           autoCapitalize="none"
//           rules={{
//             required: 'Je potřeba zadat uživatelské jméno',
//           }}
//         />
//         <CustomInput
//           placeholder="Vložte sem potvrzovací kód"
//           control={control}
//           autoCapitalize="none"
//           keyboardType="numeric"
//           maxLength={6}
//           rules={{
//             required: 'Je potřeba zadat ověřovací kód',
//           }}
//         />
//         <CustomButton text="Potvrdit" onPress={handleSubmit(Confirm)} />
//         <CustomButton text="Přeposlat kód" onPress={Resend} type="SECOND" />
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
