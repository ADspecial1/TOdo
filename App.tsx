import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]); // State to hold the list of tasks
  const [textInput, setTextInput] = useState(''); // State for the text input

  // Function to add a new task
  const addTodo = () => {
    if (textInput.trim()) {
      setTodos([...todos, { id: Date.now().toString(), task: textInput.trim() }]);
      setTextInput(''); // Clear input field after adding
    }
  };

  // Function to render each task item
  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.task}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      

      <TextInput
        style={styles.textInput}
        placeholder="Enter a new task..."
        value={textInput}
        onChangeText={setTextInput} // Update textInput state on change
      />
      <TouchableOpacity onPress={addTodo} style={styles.addButton}>
        <Text style={styles.addText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={todos} // List of tasks
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item) => item.id} // Unique key for each item
        style={styles.todoList}
      />
    </SafeAreaView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#00B2A9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoList: {
    marginTop: 20,
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
  },
});

export default App;
