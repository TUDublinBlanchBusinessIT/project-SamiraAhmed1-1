import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'John Doe',
      preview: 'Hey, I have the charger you requested!',
      timestamp: '2:45 PM',
    },
    {
      id: '2',
      sender: 'Jane Smith',
      preview: 'Can I borrow the USB drive for a day?',
      timestamp: '1:15 PM',
    },
    {
      id: '3',
      sender: 'Sam Wilson',
      preview: 'I’ll return the calculator tomorrow morning.',
      timestamp: 'Yesterday',
    },
  ]);

  // Navigate to ConversationScreen with selected message details
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
          <TouchableOpacity style={styles.messageContainer} onPress={() => handlePress(item)}>
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
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  messageDetails: { flex: 1, marginRight: 10 },
  sender: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  preview: { fontSize: 14, color: '#777' },
  timestamp: { fontSize: 12, color: '#999' },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#555' },
});
