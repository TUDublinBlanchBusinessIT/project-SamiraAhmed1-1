import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import appstyles from './assets/appstyles.js'; // Import styles
//import ColorPickerScreen from './components/colourpickerscreen';
import RegistrationScreen from './components/registerscreen'
//import Homescreen from './components/Homescreen'
//import RequestScreen from './components/Requestscreen'
//import MessagesScreen from './components/MessagesScreen'
//import ProfileScreen from './components/ProfileScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>changed</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
