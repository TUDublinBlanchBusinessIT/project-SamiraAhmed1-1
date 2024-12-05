import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Star component to display the star rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars based on integer part of rating
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star condition

  return (
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Text key={index} style={styles.fullStar}>★</Text>;
        } else if (index === fullStars && halfStars) {
          return <Text key={index} style={styles.halfStar}>★</Text>;
        }
        return <Text key={index} style={styles.emptyStar}>☆</Text>;
      })}
    </View>
  );
};

export default function EditProfileScreen({ route, navigation }) {
  const { user, setUser } = route.params;

  // Initialize state with user data
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [trustRating, setTrustRating] = useState(user.trustRating || 4); // Default rating of 4

  const handleSaveChanges = () => {
    if (!name || !email) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    // Save the updated user data
    setUser((prevUser) => ({
      ...prevUser,
      name,
      email,
      trustRating,
    }));

    Alert.alert('Profile Updated', 'Your profile has been updated successfully!');
    navigation.goBack(); // Go back to the Profile screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Trust Rating (Star Rating) */}
      <Text style={styles.ratingTitle}>Trust Rating</Text>
      <StarRating rating={trustRating} />

      {/* Save Changes Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#b0e0e6', // Baby blue background color
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
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  fullStar: {
    color: '#FFD700', // Gold color for full stars
    fontSize: 30,
  },
  halfStar: {
    color: '#FFD700',
    fontSize: 30,
  },
  emptyStar: {
    color: '#e0e0e0', // Light gray color for empty stars
    fontSize: 30,
  },
});
