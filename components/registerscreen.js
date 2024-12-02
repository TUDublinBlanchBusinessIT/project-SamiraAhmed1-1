import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import appstyles from '../assets/appstyles.js'; // Import your shared styles

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Get navigation from the hook

  const handleLogin = () => {
    // Simulate a login process
    alert(`Logging in with username: ${username}`);
    
    // Navigate to Homescreen after successful login
    navigation.navigate('Homescreen');
  };

  const handleSignUp = () => {
    // Navigate to SignUp screen
    navigation.navigate('SignUp'); // Ensure 'SignUp' is defined correctly in App.js
  };

  const handleForgotPassword = () => {
    // Add forgot password logic here
    alert('Redirecting to Forgot Password page');
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out successfully.');
    navigation.navigate('Register'); // This navigates to the Register screen
  };
  

  return (
    <View style={appstyles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/BorrowBuddylogo.png')} 
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
      <Button title="Sign Up!" onPress={handleSignUp} color="green" />

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={handleForgotPassword} style={{ marginTop: 10 }}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}