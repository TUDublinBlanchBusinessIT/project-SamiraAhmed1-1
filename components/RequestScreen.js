import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

export default function RequestScreen({ route, navigation }) {
  const { items } = route.params; // Get items with their requested status from Homescreen

  // Navigate to Messages Screen
  const goToMessages = () => {
    navigation.navigate('Messages');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Items Requested</Text>

      {/* FlatList to display items and their request status */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemOwner}>Owner: {item.owner}</Text>
              <Text style={styles.itemDistance}>Distance: {item.distance}</Text>
              <Text style={styles.itemStatus}>
                {item.requested ? 'Status: Pending' : 'Status: Available'}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Button to navigate to Messages Screen */}
      <TouchableOpacity
        style={styles.messagesButton}
        onPress={goToMessages}
      >
        <Text style={styles.messagesButtonText}>Go to Messages</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F8E9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#388E3C',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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
    color: '#388E3C',
  },
  itemOwner: {
    fontSize: 14,
    color: '#757575',
  },
  itemDistance: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10,
  },
  itemStatus: {
    fontSize: 14,
    color: '#FF5722', // Red color for status text
  },
  messagesButton: {
    backgroundColor: '#0288D1', // Blue color for "Go to Messages" button
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  messagesButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
