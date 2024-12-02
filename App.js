import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './components/registerscreen';
import Homescreen from './components/Homescreen';
import SignUpScreen from './components/SignUpScreen';
import RequestScreen from './components/RequestScreen';
import  MessagesScreen from './components/MessagesScreen';
import ConversationScreen from './components/ConversationScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Request" component={RequestScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}