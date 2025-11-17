// app/Bai3.tsx
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

async function getCoordinates(city: string) {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('Không tìm thấy thành phố');
  }
  const { latitude, longitude } = data.results[0];
  return { latitude, longitude };
}

async function getWeather(lat: number, lon: number) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  const data = await response.json();
  return data.current_weather;
}

export default function Bai3() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<{ temperature: number; windspeed: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = async () => {
    if (!city.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên thành phố');
      return;
    }

    setLoading(true);
    setWeather(null);

    try {
      const coords = await getCoordinates(city);
      const data = await getWeather(coords.latitude, coords.longitude);
      setWeather({ temperature: data.temperature, windspeed: data.windspeed });
    } catch (error: any) {
      Alert.alert('Lỗi', error.message || 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên thành phố"
        value={city}
        onChangeText={setCity}
      />

      <View style={styles.buttonContainer}>
        <Button title="Xem thời tiết" onPress={handleFetchWeather} />
      </View>

      {loading && <ThemedText style={styles.statusText}>Đang tải…</ThemedText>}

      {weather && (
        <View style={styles.weatherContainer}>
          <ThemedText type="subtitle">
            Nhiệt độ hiện tại: {weather.temperature}°C
          </ThemedText>
          <ThemedText type="subtitle">
            Tốc độ gió: {weather.windspeed} km/h
          </ThemedText>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
    gap: 16,                  
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    height: 50,
    width: '80%',
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: 'center', 
  },
  buttonContainer: {
    width: '50%',
    marginTop: 10,
  },
  statusText: {
    marginTop: 16,
    fontSize: 16,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
    gap: 8,
  },
});
