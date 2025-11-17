// app/Bai2.tsx
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function bai2() {
  const [count, setCount] = useState(0);

  const handleReset = () => setCount(0); // reset về 0

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">
        Bạn đã nhấn: {count} {count === 1 ? 'lần' : 'lần'}
      </ThemedText>

      <View style={styles.buttonGroup}>
        <Button title="Nhấn tôi" onPress={() => setCount(count + 1)} />
        <Button title="Reload" onPress={handleReset} color="#FF4D4F" />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 20,
  },
});
