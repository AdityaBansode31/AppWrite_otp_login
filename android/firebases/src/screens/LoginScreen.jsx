// // src/screens/LoginScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { loginWithPhoneNumber, verifyOTP } from '../loginUser';

// const LoginScreen = ({ navigation }) => {
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [userId, setUserId] = useState('');
//   const [error, setError] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   const handleLogin = async () => {
//     if (!phone) {
//       setError('Please enter a phone number.');
//       return;
//     }
//     try {
//       const response = await loginWithPhoneNumber(phone);
//       setUserId(response.userId);
//       setIsOtpSent(true);
//       setError('');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp) {
//       setError('Please enter the OTP.');
//       return;
//     }
//     try {
//       await verifyOTP(userId, otp);
//       navigation.replace('Home');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter phone number"
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//       />
//       {isOtpSent && (
//         <TextInput
//           style={styles.input}
//           placeholder="Enter OTP"
//           value={otp}
//           onChangeText={setOtp}
//           keyboardType="numeric"
//         />
//       )}
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       {!isOtpSent ? (
//         <Button title="Send OTP" onPress={handleLogin} />
//       ) : (
//         <Button title="Verify OTP" onPress={handleVerifyOtp} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingLeft: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default LoginScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { sendOTP } from '../services/appwriteService';
import styles from '../styles/registrationStyles';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Invalid Input', 'Phone number must be 10 digits.');
      return;
    }
    const response = await sendOTP(phoneNumber);
    if (response.success) {
      Alert.alert('OTP Sent!', 'Please check your phone.');
      navigation.navigate('OTPScreen', { userId: response.userId });
    } else {
      Alert.alert('Error', 'Failed to send OTP. Try again.');
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10} // Restrict input to 10 digits
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={navigateToRegister}>
        <Text style={styles.linkText}>Not registered? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
