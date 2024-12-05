import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

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
      {/* Profile Icon */}
      <View style={styles.profileIconContainer}>
        <Image source={require('../assets/profile-placeholder.png')} style={styles.profileImage} />
      </View>

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
    backgroundColor: '#E1F5FE', // Light blue background
  },
  profileIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#388E3C',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
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
    color: '#333',
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
    color: '#FFD700', // Gold color for half stars
    fontSize: 30,
  },
  emptyStar: {
    color: '#e0e0e0', // Light gray color for empty stars
    fontSize: 30,
  },
});
