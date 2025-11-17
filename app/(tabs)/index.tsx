// app/index.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Thực hành
      </ThemedText>

      <View style={styles.buttonContainer}>
        <Link href="/bai1" asChild>
          <TouchableOpacity style={styles.button}>
            <ThemedText type="subtitle" style={{ color: 'white' }}>Bài 1: Hiển thị nội dung nhập</ThemedText>
          </TouchableOpacity>
        </Link>

        <Link href="/bai2" asChild>
          <TouchableOpacity style={styles.button}>
            <ThemedText type="subtitle" style={{ color: 'white' }}>Bài 2: Click Counter</ThemedText>
          </TouchableOpacity>
        </Link>

        <Link href="/bai3" asChild>
          <TouchableOpacity style={styles.button}>
            <ThemedText type="subtitle" style={{ color: 'white' }}>Bài 3: Weather App</ThemedText>
          </TouchableOpacity>
        </Link>

        <Link href="/bai4" asChild>
          <TouchableOpacity style={styles.button}>
            <ThemedText type="subtitle" style={{ color: 'white' }}>Bài 4: Danh sách công việc</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: '#000080',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
});
