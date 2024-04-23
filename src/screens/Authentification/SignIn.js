// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Alert,
//   Image,
//   StyleSheet,
//   useWindowDimensions,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// //import Logo from '../../../assets/images/Logo_1.png';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/Buttons/customButton';
// import {useNavigation} from '@react-navigation/native';
// import {colors} from '../../styles';
// import {Auth} from 'aws-amplify';
// import {useForm, Controller} from 'react-hook-form';

// const SignIn = () => {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();

//   const SignInPress = async data => {
//     if (loading) {
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await Auth.signIn(data.username, data.password);
//       console.log(response);
//     } catch (e) {
//       Alert.alert('Jejda...', e.message);
//     }
//     setLoading(false);
//   };

//   const ForgotPassword = () => {
//     navigation.navigate('forgotPassword');
//   };

//   const SignUp = () => {
//     navigation.navigate('signUp');
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.root}>
//         <Text style={styles.title}>Přihlásit se</Text>
//         <CustomInput
//           name="username"
//           placeholder="Uživatelské jméno"
//           autoCapitalize="none"
//           control={control}
//           rules={{required: 'Je potřeba zadat uživatelské jméno'}}
//         />
//         <CustomInput
//           name="password"
//           placeholder="Heslo"
//           secureTextEntry
//           autoCapitalize="none"
//           control={control}
//           rules={{
//             required: 'Je potřeba zadat uživatelské jméno',
//             minLength: {
//               value: 3,
//               message: 'Heslo musí obsahovat minimálně 3 znaky',
//             },
//           }}
//         />
//         <CustomButton
//           text={loading ? 'Načítání...' : 'Přihlásit se'}
//           onPress={handleSubmit(SignInPress)}
//         />
//         <CustomButton
//           text="Zapoměli jste heslo?"
//           onPress={ForgotPassword}
//           type="THIRD"
//         />

//         <CustomButton
//           text="Ještě nemáte účet? Vytvořte si ho."
//           onPress={SignUp}
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
//   logo: {
//     width: '70%',
//     maxWidth: 300,
//     maxHeight: 200,
//   },
//   title: {
//     color: colors.white,
//     fontWeight: 'bold',
//     fontSize: 24,
//     padding: 20,
//   },
// });
// export default SignIn;
