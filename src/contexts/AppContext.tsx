import { createContext, useContext, ReactNode, useState } from "react";
import { AppStates } from "types/appTypes";

const AppContext = createContext({} as AppStates);

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [counter, setCounter] = useState({});

  const states = { counter, setCounter };

  return <AppContext.Provider value={states as AppStates}>{children}</AppContext.Provider>;
}
