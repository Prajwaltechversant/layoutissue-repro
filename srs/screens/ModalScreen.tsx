import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useScreen } from '../context/ScreenContext';

export default function ModalScreen({ navigation }: any) {
  const { isPortrait } = useScreen();

  return (
    <View style={isPortrait ? styles.portrait : styles.landscape}>
      <Text style={styles.title}>Modal Screen</Text>
      <Text>This is a modal screen with gesture support.</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const base = {
  flex: 1,
  padding: 20,
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  portrait: {
    ...base,
    backgroundColor: '#d1c4e9',
  },
  landscape: {
    ...base,
    backgroundColor: '#c8e6c9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
});
