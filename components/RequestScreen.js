import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function RequestScreen({ navigation }) {
  const [items, setItems] = useState([
    { id: '1', name: 'Laptop Charger', distance: '1.2km', image: require('../assets/laptopcharger.jpg') },
    { id: '2', name: 'Power Bank', distance: '0.8km', image: require('../assets/powerbank.jpg') },
    { id: '3', name: 'Headphones', distance: '0.5km', image: require('../assets/headphones.jpg') },
  ]);

  const handleRequest = (itemName) => {
    alert(`Requested ${itemName}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Items Available for Request</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDistance}>Distance: {item.distance}</Text>
              <TouchableOpacity style={styles.requestButton} onPress={() => handleRequest(item.name)}>
                <Text style={styles.requestButtonText}>Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Navigate to Messages Screen */}
      <Button
        title="Go to Messages"
        onPress={() => navigation.navigate('Messages')}
        color="#007BFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  itemContainer: { flexDirection: 'row', padding: 10, marginBottom: 10, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  itemDetails: { flex: 1, justifyContent: 'center' },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemDistance: { fontSize: 14, color: '#777', marginBottom: 5 },
  requestButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10, // Smaller width
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 12, // Smaller font size
    fontWeight: 'bold',
  },
});