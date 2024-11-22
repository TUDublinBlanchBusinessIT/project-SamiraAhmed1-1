import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import appstyles from '../assets/appstyles.js'; // Import your shared styles

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    alert(`Logging in with username: ${username}`);
  };

  const handleForgotPassword = () => {
    // Add forgot password navigation here
    alert('Redirecting to Forgot Password page');
  };

  return (
    <View style={appstyles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/BorrowBuddylogo.png')} // Ensure the logo.png file exists in this path
        style={{ width: 100, height: 100, marginBottom: 20 }} 
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={appstyles.title}>Login</Text>

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

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={handleForgotPassword} style={{ marginTop: 10 }}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}