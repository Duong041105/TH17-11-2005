// app/Bai4.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';

export default function Bai4() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (!task.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập công việc');
      return;
    }
    setTodoList([...todoList, task.trim()]);
    setTask('');
  };

  const handleDeleteTask = (index: number) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <ThemedText style={styles.addButtonText}>Thêm việc</ThemedText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleDeleteTask(index)}>
            <ThemedText>{item}</ThemedText>
          </TouchableOpacity>
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // tránh bị che status bar
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  list: {
    marginTop: 20,
    width: '80%',
  },
  listContent: {
    alignItems: 'center',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});
