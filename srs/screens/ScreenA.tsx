// src/screens/ScreenA.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useScreen } from '../context/ScreenContext';

export default function ScreenA({ navigation }: any) {
  const [text, setText] = useState('');
  const screen = useScreen();

  return (
    <View style={styles.container(screen)}>
      <Text style={styles.title}>Screen A</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type here..."
        style={styles.input(screen)}
      />
      <Button title="Go to B" onPress={() => navigation.navigate('ScreenB')} />
    </View>
  );
}

const styles = {
  container: (screen: ReturnType<typeof useScreen>) => ({
    backgroundColor: screen.isPortrait ? '#fce4ec' : '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }),

  input: (screen: ReturnType<typeof useScreen>) => ({
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    marginVertical: 20,
    width: screen.isPortrait ? screen.width * 0.9 : screen.width * 0.6,
    height: screen.isPortrait ? screen.height * 0.07 : screen.width * 0.05,
    backgroundColor: '#fff',
  }),

  title: {
    fontSize: 24,
    marginBottom: 16,
  },
};
