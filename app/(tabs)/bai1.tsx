// app/Bai1.tsx
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function Bai1() {
  const [text, setText] = useState('');

  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung..."
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.displayText}>
        {text.length > 0 ? text : 'Chưa có nội dung'}
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  displayText: {
    marginTop: 16,
    fontSize: 18,
    color: '#333',
  },
});
