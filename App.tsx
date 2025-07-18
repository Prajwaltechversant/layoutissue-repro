import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenProvider } from './srs/context/ScreenContext';
import ScreenA from './srs/screens/ScreenA';
import ScreenB from './srs/screens/ScreenB';
import ScreenC from './srs/screens/ScreenC';
import ModalScreen from './srs/screens/ModalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScreenProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
          <Stack.Screen name="ScreenC" component={ScreenC} />
          <Stack.Screen
            name="ModalScreen"
            component={ModalScreen}
            options={{ presentation: 'modal', gestureEnabled: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScreenProvider>
  );
}
