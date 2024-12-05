import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

export default function Homescreen({ route, navigation }) {
  const { username } = route.params || {}; // Extract username

  // Sample items for the home screen
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Charger',
      distance: '0.5km',
      image: require('../assets/charger.jpg'),
      owner: 'John Doe',
      trustRating: 4,
      requested: false, // Track request status
    },
    {
      id: '2',
      name: 'USB',
      distance: '0.5km',
      image: require('../assets/usb.jpg'),
      owner: 'Jane Smith',
      trustRating: 5,
      requested: false, // Track request status
    },
    {
      id: '3',
      name: 'Calculator',
      distance: '0.5km',
      image: require('../assets/calculator.jpg'),
      owner: 'Sam Wilson',
      trustRating: 3,
      requested: false, // Track request status
    },
  ]);

  // Search functionality for filtering items
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered items based on the search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequest = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, requested: true } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Icon in the top right corner */}
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => navigation.navigate('Profile')} // Navigate to Profile Screen
      >
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Welcome Message */}
      <Text style={styles.welcomeText}>
        Welcome to BorrowBuddy{username ? `, ${username}` : ''}!
      </Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* FlatList for displaying items */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemOwner}>Owner: {item.owner}</Text>
              <Text style={styles.itemDistance}>Distance: {item.distance}</Text>
              <View style={styles.ratingContainer}>
                {/* Display stars for the trust rating */}
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    name={index < item.trustRating ? 'star' : 'star-o'}
                    size={18}
                    color="#FFD700"
                  />
                ))}
              </View>
              <TouchableOpacity
                style={[styles.requestButton, { backgroundColor: item.requested ? '#B0BEC5' : '#388E3C' }]}
                onPress={() => handleRequest(item.id)}
                disabled={item.requested} // Disable button if already requested
              >
                <Text style={styles.requestButtonText}>
                  {item.requested ? 'Pending' : 'Request'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Button to navigate to Request Screen */}
      <Button
        title="Go to Requests"
        onPress={() => navigation.navigate('Request', { items: items })} // Pass the items with status to the RequestScreen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E1F5FE' },
  profileIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796B',
  },
  searchBar: {
    height: 40,
    borderColor: '#00796B',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  itemDetails: { flex: 1, justifyContent: 'center' },
  itemName: { fontSize: 18, fontWeight: 'bold', color: '#00796B' },
  itemOwner: { fontSize: 14, color: '#607D8B', marginBottom: 5 },
  itemDistance: { fontSize: 14, color: '#607D8B', marginBottom: 5 },
  ratingContainer: { flexDirection: 'row', marginBottom: 5 },
  requestButton: { paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5, alignSelf: 'flex-start' },
  requestButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});
