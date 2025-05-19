import React, { createContext, useContext, useState } from "react";

const ContextState = createContext({});

interface State {
    user: null;
    accessToken: string | null;
}
  
export const ContextStateProvider = ({ children }: any) => {
  const [contextState, setContextState] = useState<State>();

  return (
    <ContextState.Provider value={{ contextState, setContextState }}>
      {children}
    </ContextState.Provider>
  );
};

export const useContextState = (): {
  contextState: State;
  setContextState: React.Dispatch<React.SetStateAction<State>>;
} => useContext(ContextState) as any;