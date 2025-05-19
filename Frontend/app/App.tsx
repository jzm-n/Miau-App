import * as React from "react";
import { ContextStateProvider } from "../contexts/ContextState";
import Router from "./Router";
import { useFonts } from "expo-font";
import { FONTS } from "@/src/constants/fonts";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useCustomFonts } from "@/src/hooks/useFonts";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useCustomFonts();
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