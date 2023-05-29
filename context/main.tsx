import React, { useState, ReactNode, createContext, useContext } from "react";
import { TMainContextType, TLanguage } from "../types";

import selectDictionary from "../dictionary";

const MainContext = createContext<TMainContextType | null>(null);

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<TLanguage>("BR");

  const value: TMainContextType = {
    dictionary: selectDictionary(language),
    language,
    setLanguage,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

const useMainContext = (): TMainContextType => {
  const context = useContext(MainContext);
  if (context === null) {
    throw new Error("Main need to use MainProvider");
  }
  return context;
};

export { MainProvider, MainContext, useMainContext };
