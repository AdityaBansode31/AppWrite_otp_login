// src/navigation/AppNavigator.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Register',
  }
);

export default createAppContainer(AppNavigator);
