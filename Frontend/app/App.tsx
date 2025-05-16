import * as React from "react";
import { ContextStateProvider } from "../src/ContextState";
import Router from "../Router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
      'JetBrainsMono-Regular': require('../src/assets/Fonts/JetBrainsMono-Regular.otf'),
      'JetBrainsMono-Light': require('../src/assets/Fonts/JetBrainsMono-Light.otf'),
      'JetBrainsMono-Bold': require('../src/assets/Fonts/JetBrainsMono-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ContextStateProvider>
      <Router />
    </ContextStateProvider>
  );
};

export default App;