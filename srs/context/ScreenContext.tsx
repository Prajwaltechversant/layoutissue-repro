// src/context/ScreenContext.tsx
import React, { createContext, useEffect, useState, useContext } from 'react';
import { Dimensions } from 'react-native';

type ScreenContextType = {
  width: number;
  height: number;
  isPortrait: boolean;
};

const ScreenContext = createContext<ScreenContextType>({
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  isPortrait: true,
});

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handler = ({ window }: { window: any }) => setDimensions(window);
    const subscription = Dimensions.addEventListener('change', handler);
    return () => subscription?.remove();
  }, []);

  const isPortrait = dimensions.height >= dimensions.width;

  return (
    <ScreenContext.Provider
      value={{
        width: dimensions.width,
        height: dimensions.height,
        isPortrait,
      }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => useContext(ScreenContext);
