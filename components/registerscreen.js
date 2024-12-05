import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
    alert('Redirecting to Forgot Password page');
    navigation.navigate('ForgotPassword');
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out successfully.');
    navigation.navigate('Register'); // This navigates to the Register screen
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/BorrowBuddylogo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>BorrowBuddy</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
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

// Updated Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4CAF50', // Green title
  },
  input: {
    width: '80%', // Reduced width for a more compact appearance
    height: 45, // Reduced height for the input boxes
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    paddingLeft: 15, // Added padding for the input text
    marginBottom: 15,
    backgroundColor: '#fff', // White background for the input
    shadowColor: '#000', // Subtle shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Slight elevation for input fields
  },
});
