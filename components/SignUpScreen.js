import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase/compat/app'; // Use Firebase compat SDK
import 'firebase/compat/auth'; // Firebase Auth
import 'firebase/compat/firestore'; // Firebase Firestore

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Sequ-5StxQt4EGhuiEdvwKHxl-MjZ3Y",
  databaseURL: "https://borrowbuddy-801e2.firebaseapp.com",
  authDomain: "borrowbuddy-801e2.firebaseapp.com",
  projectId: "borrowbuddy-801e2",
  storageBucket: "borrowbuddy-801e2.appspot.com",
  messagingSenderId: "681414019242",
  appId: "1:681414019242:web:860f688fcdbd563d8768d3",
};

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;

        firebase.firestore().collection('users').doc(userId).set({
          username,
          email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
          Alert.alert('Success', 'Account created successfully!');
          navigation.navigate('Homescreen', { username });
        }).catch((error) => Alert.alert('Error', error.message));
      })
      .catch((error) => Alert.alert('Error', error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Register')}
        >
          Log in
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#555',
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
