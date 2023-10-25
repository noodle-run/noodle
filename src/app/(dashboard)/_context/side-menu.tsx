"use client";

import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

type SideMenuContextType = {
  isOpen: boolean;
  toggle: () => void;
};

const SideMenuContext = createContext<SideMenuContextType>({
  isOpen: false,
  toggle: () => null,
});

export const SideMenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <SideMenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SideMenuContext.Provider>
  );
};

export const useSideMenu = () => useContext(SideMenuContext);
