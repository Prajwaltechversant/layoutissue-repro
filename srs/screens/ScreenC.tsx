import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';
import { useScreen } from '../context/ScreenContext';

export default function ScreenC({ navigation }: any) {
  const { isPortrait } = useScreen();
  const [count, setCount] = useState(0);
  const { width, height } = useWindowDimensions();

  return (
    <View style={isPortrait ? styles.portrait : styles.landscape}>
      <Text style={styles.title}>Screen C</Text>
      <Text>Window Size: {width} x {height}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(c => c + 1)} />
      <Button title="Open Modal" onPress={() => navigation.navigate('ModalScreen')} />
    </View>
  );
}

const base = {
  flex: 1,
  padding: 16,
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  portrait: {
    ...base,
    backgroundColor: '#f8bbd0',
  },
  landscape: {
    ...base,
    backgroundColor: '#b3e5fc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
});
