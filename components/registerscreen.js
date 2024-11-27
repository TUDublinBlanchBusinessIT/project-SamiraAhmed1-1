import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import appstyles from '../assets/appstyles.js'; // Import your shared styles

export default function RegisterScreen() { // Capitalized component name
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Get navigation from the hook

  const handleLogin = () => {
    // Simulate a login process
    alert(`Logging in with username: ${username}`);
    
    // Navigate to Home screen after successful login
    navigation.navigate('Homescreen'); // Or 'HomeScreen' based on your navigation setup
  };

  const handleForgotPassword = () => {
    // Add forgot password logic here
    alert('Redirecting to Forgot Password page');
  };

  return (
    <View style={appstyles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/BorrowBuddylogo.png')} // Ensure the logo.png file exists in this path
        style={{ width: 180, height: 180, marginBottom: 20 }} 
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={appstyles.title}>BorrowBuddy</Text>

      {/* Username Input */}
      <TextInput
        style={appstyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={appstyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Hides the password
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />

      {/* Sign Up Button */}
      <Button title="Sign Up!" onPress={() => navigation.navigate('Home')} color="green" />

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={handleForgotPassword} style={{ marginTop: 10 }}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}