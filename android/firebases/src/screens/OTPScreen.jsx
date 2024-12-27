// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { verifyOTP } from '../services/appwriteService';
// import styles from '../styles/otpStyles';

// const OTPScreen = ({ route, navigation }) => {
//   const { userId } = route.params;
//   const [otp, setOtp] = useState('');

//   const handleVerifyOTP = async () => {
//     const response = await verifyOTP(userId, otp);
//     if (response.success) {
//       Alert.alert('Success', 'OTP Verified!');
//       navigation.replace('HomeScreen');
//     } else {
//       Alert.alert('Error', 'Invalid OTP. Try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify OTP</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         keyboardType="numeric"
//         value={otp}
//         onChangeText={setOtp}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
//         <Text style={styles.buttonText}>Verify</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default OTPScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { verifyOTP } from '../services/appwriteService';
import LottieView from 'lottie-react-native';
import styles from '../styles/otpStyles';

const OTPScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [otp, setOtp] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [animationSource, setAnimationSource] = useState(require('../assets/success.json'));

  const handleVerifyOTP = async () => {
    const response = await verifyOTP(userId, otp);
    if (response.success) {
      setAnimationSource(require('../assets/success.json'));
      setModalMessage('OTP Verified!');
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.replace('HomeScreen');
      }, 2000);
    } else {
      setAnimationSource(require('../assets/error.json'));
      setModalMessage('Invalid OTP. Try again.');
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <LottieView
        source={require('../assets/otp-animation.json')}
        autoPlay
        loop
        style={customStyles.animation}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={customStyles.modalContainer}>
          <LottieView
            source={animationSource}
            autoPlay
            loop={false}
            style={customStyles.modalAnimation}
          />
          <Text style={customStyles.modalMessage}>{modalMessage}</Text>
        </View>
      </Modal>
    </View>
  );
};

const customStyles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalAnimation: {
    width: 150,
    height: 150,
  },
  modalMessage: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default OTPScreen;
