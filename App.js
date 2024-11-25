import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Button, StyleSheet } from 'react-native';
import RegisterScreen from './components/registerscreen'; // Import the RegisterScreen
import HomeScreen from './components/Homescreen';  // Example screen
import RequestScreen from './components/RequestScreen'; // Example screen
import MessagesScreen from './components/MessagesScreen'; // Example screen
import ProfileScreen from './components/ProfileScreen'; // Example screen

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle login logic
  const handleLogin = () => {
    setLoggedIn(true); // Simulate a successful login
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        // Show tab navigator after login
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#f8f8f8', // Tab bar background
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#007BFF', // Indicator color
            },
            tabBarActiveTintColor: '#007BFF', // Active tab text color
            tabBarInactiveTintColor: '#999999', // Inactive tab text color
          }}
        >
          {/* Your Tab Screens */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Requests" component={RequestScreen} />
          <Tab.Screen name="Messages" component={MessagesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        // Show Login screen when not logged in
        <RegisterScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}

  




