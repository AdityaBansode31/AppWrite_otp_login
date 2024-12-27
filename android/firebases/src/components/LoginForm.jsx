// src/components/LoginForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginForm = ({ onSubmit, onOtpLogin }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email/Phone"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Login" onPress={() => onSubmit({ email })} />
      <Button title="Login with OTP" onPress={onOtpLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 10, borderWidth: 1, padding: 8, borderRadius: 5 },
});

export default LoginForm;
