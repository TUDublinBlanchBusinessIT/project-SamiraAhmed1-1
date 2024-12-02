import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ConversationScreen({ route }) {
  const { message } = route.params; // Get the message details passed as a param
  const [conversation, setConversation] = useState([
    { id: '1', sender: message.sender, content: message.preview, timestamp: '2:45 PM' },
    { id: '2', sender: 'You', content: 'Thanks! When can I pick it up?', timestamp: '2:50 PM' },
    { id: '3', sender: message.sender, content: 'Anytime after 4 PM today.', timestamp: '2:55 PM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setConversation((prev) => [
        ...prev,
        {
          id: (conversation.length + 1).toString(),
          sender: 'You',
          content: newMessage.trim(),
          timestamp: 'Just now',
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conversation with {message.sender}</Text>
      <FlatList
        data={conversation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'You' ? styles.userMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageSender}>{item.sender}</Text>
            <Text style={styles.messageContent}>{item.content}</Text>
            <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No messages yet.</Text>}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  userMessage: { alignSelf: 'flex-end', backgroundColor: '#007BFF', borderColor: '#007BFF' },
  otherMessage: { alignSelf: 'flex-start', backgroundColor: '#f1f1f1' },
  messageSender: { fontWeight: 'bold', marginBottom: 5 },
  messageContent: { fontSize: 16, marginBottom: 5 },
  messageTimestamp: { fontSize: 12, color: '#999', alignSelf: 'flex-end' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: { backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8 },
  sendButtonText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#555' },
});
