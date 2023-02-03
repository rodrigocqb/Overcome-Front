import { createContext, ReactNode, useContext, useState } from "react";

type SideMenuStates = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideMenuContext = createContext({} as SideMenuStates);

export const useSideMenuContext = () => {
  return useContext(SideMenuContext);
};

export default function SideMenuContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);

  const states = {
    showMenu,
    setShowMenu,
  };

  return (
    <SideMenuContext.Provider value={states as SideMenuStates}>
      {children}
    </SideMenuContext.Provider>
  );
}
