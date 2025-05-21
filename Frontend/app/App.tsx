import * as React from "react";
import { ContextStateProvider } from "../contexts/ContextState";
import Router from "./Router";
import { useCustomFonts } from "@/src/hooks/useFonts";

const App = () => {
 const [fontsLoaded] = useCustomFonts();
  if (!fontsLoaded) return null;
  
  return (
    <ContextStateProvider>
      <Router />
    </ContextStateProvider>
  );
};

export default App;