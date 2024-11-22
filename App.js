import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import appstyles from './assets/appstyles.js'; 
import RegistrationScreen from './components/registerscreen'





const Tab = createMaterialTopTabNavigator();





export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={RegistrationScreen} />

       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
