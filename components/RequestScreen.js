import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function RequestScreen() {
  // Sample data for available items
  const [items, setItems] = useState([
    { id: '1', name: 'Laptop Charger', distance: '1.2km', image: require('../assets/laptopcharger.jpg') },
    { id: '2', name: 'Power Bank', distance: '0.8km', image: require('../assets/powerbank.jpg') },
    { id: '3', name: 'Headphones', distance: '0.5km', image: require('../assets/headphones.jpg') },
  ]);

  // Handle "Request" button press
  const handleRequest = (itemName) => {
    Alert.alert('Request Sent', `Your request for ${itemName} has been sent.`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Items Available for Request</Text>

      {/* FlatList to Render Items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* Item Image */}
            <Image source={item.image} style={styles.itemImage} />
            
            {/* Item Details */}
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDistance}>Distance: {item.distance}</Text>
              
              {/* Request Button */}
              <TouchableOpacity
                style={styles.requestButton}
                onPress={() => handleRequest(item.name)}
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

// Styles for the Request Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  itemDistance: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  requestButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
