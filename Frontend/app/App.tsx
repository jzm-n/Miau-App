import * as React from "react";
import { ContextStateProvider } from "../contexts/ContextState";
import Router from "./Router";

const App = () => {
  
  return (
    <ContextStateProvider>
      <Router />
    </ContextStateProvider>
  );
};

export default App;