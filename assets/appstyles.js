import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import styles from './appstyles';




const appstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 40,
  },
  selectedColorText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default appstyles;