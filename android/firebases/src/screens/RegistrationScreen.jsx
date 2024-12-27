// // src/screens/RegisterScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { registerWithPhone } from '../registerUser';

// const RegisterScreen = ({ navigation }) => {
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     if (!phone) {
//       setError('Please enter a phone number.');
//       return;
//     }
//     try {
//       await registerWithPhone(phone);
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
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Register" onPress={handleRegister} />
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

// export default RegisterScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { sendOTP } from '../services/appwriteService';
import styles from '../styles/registrationStyles';

const RegistrationScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Invalid Input', 'Phone number must be 10 digits.');
      return;
    }
    const response = await sendOTP(phoneNumber);
    if (response.success) {
      Alert.alert('Registration Successful!', 'Please verify your phone number.');
      navigation.navigate('OTPScreen', { userId: response.userId });
    } else {
      Alert.alert('Error', 'Registration failed. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10} // Restrict input to 10 digits
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;