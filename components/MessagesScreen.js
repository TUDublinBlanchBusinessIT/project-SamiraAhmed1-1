import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'John Doe',
      preview: 'Hey, I have the charger you requested!',
      timestamp: '2:45 PM',
      read: false,
    },
    {
      id: '2',
      sender: 'Jane Smith',
      preview: 'Can I borrow the USB drive for a day?',
      timestamp: '1:15 PM',
      read: true,
    },
    {
      id: '3',
      sender: 'Sam Wilson',
      preview: 'I’ll return the calculator tomorrow morning.',
      timestamp: 'Yesterday',
      read: false,
    },
  ]);

  // Navigate to the Conversation screen with selected message details
  const handlePress = (message) => {
    navigation.navigate('Conversation', { message });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.messageContainer, item.read ? styles.readMessage : styles.unreadMessage]}
            onPress={() => handlePress(item)}
          >
            <View style={styles.messageDetails}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={styles.preview}>{item.preview}</Text>
            </View>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No messages yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7', // Light grey background
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Darker text for contrast
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff', // White background for each message container
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For a subtle shadow
  },
  unreadMessage: {
    backgroundColor: '#f1f8ff', // Light blue background for unread messages
  },
  readMessage: {
    backgroundColor: '#e8e8e8', // Light grey background for read messages
  },
  messageDetails: {
    flex: 1,
    marginRight: 10,
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2', // A subtle blue for the sender
  },
  preview: {
    fontSize: 14,
    color: '#555', // Dark grey for the preview text
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#999', // Light grey for timestamp
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999', // Light grey for "No messages" message
  },
});
