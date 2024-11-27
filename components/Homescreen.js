import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Homescreen({ route }) {
  // Extract username from route.params
  const { username } = route.params || {}; 

  // Sample data for items
  const [items, setItems] = useState([
    { id: '1', name: 'Charger', distance: '0.5km', image: require('../assets/charger.jpg') },
    { id: '2', name: 'USB', distance: '0.5km', image: require('../assets/usb.jpg') },
    { id: '3', name: 'Calculator', distance: '0.5km', image: require('../assets/calculator.jpg') },
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to BorrowBuddy{username ? `, ${username}` : ''}!</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar} // Changed to use `styles`
        placeholder="Search items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Item List */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDistance}>Distance: {item.distance}</Text>
              <TouchableOpacity
                style={styles.requestButton}
                onPress={() => alert('Request pressed!')} // Adjust navigation logic as needed
              >
                <Text style={styles.requestButtonText}>Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDistance: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  requestButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});