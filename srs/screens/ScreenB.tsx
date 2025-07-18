// src/screens/ScreenB.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useScreen } from '../context/ScreenContext';

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export default function ScreenB({ navigation }: any) {
  const screen = useScreen();
  const [text, setText] = useState('');
  const [selected, setSelected] = useState<number | null>(null);

  const isPortrait = screen.isPortrait;
  const cardWidth = isPortrait ? screen.width * 0.9 : screen.width * 0.4;
  const cardHeight = isPortrait ? screen.height * 0.25 : screen.width * 0.2;

  return (
    <ScrollView contentContainerStyle={styles.container(screen)}>
      <Text style={styles.title}>Complex Screen B</Text>

      <TextInput
        placeholder="Enter some text"
        value={text}
        onChangeText={setText}
        style={styles.input(screen)}
      />

      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item}-${index}`}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelected(index)}
            style={styles.card(screen, index === selected)}
          >
            <Image
              source={{ uri: 'https://placekitten.com/200/200' }}
              style={styles.image(screen)}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
        style={{ marginBottom: 20 }}
      />

      <Button title="Go to Screen C" onPress={() => navigation.navigate('ScreenC')} />
    </ScrollView>
  );
}

const styles = {
  container: (screen: ReturnType<typeof useScreen>) => ({
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: screen.isPortrait ? '#f3e5f5' : '#fff3e0',
    flexGrow: 1,
  }),

  title: {
    fontSize: 24,
    marginBottom: 16,
  },

  input: (screen: ReturnType<typeof useScreen>) => ({
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    width: screen.isPortrait ? screen.width * 0.9 : screen.width * 0.6,
    height: screen.isPortrait ? screen.height * 0.07 : screen.width * 0.05,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  }),

  card: (screen: ReturnType<typeof useScreen>, isSelected: boolean) => ({
    width: screen.isPortrait ? screen.width * 0.42 : screen.width * 0.35,
    height: screen.isPortrait ? screen.height * 0.25 : screen.width * 0.2,
    backgroundColor: isSelected ? '#c8e6c9' : '#fff',
    margin: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  image: (screen: ReturnType<typeof useScreen>) => ({
    width: '100%',
    height: '70%',
  }),

  cardText: {
    padding: 8,
    textAlign: 'center',
  },
};
