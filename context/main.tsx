import React, { useState, ReactNode, createContext, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TMainContextType, TLanguage } from "../types";

import selectDictionary from "../dictionary";

const MainContext = createContext<TMainContextType | null>(null);


const MainProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<TLanguage>("BR");

  const setStoreLanguage = async (value: TLanguage) => {
    try {
      await AsyncStorage.setItem('language', value);
      setLanguage(value)
    } catch (e) {
      // saving error
    }
  };

  const getStoreLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        setLanguage(value as TLanguage)
      }
    } catch (e) {
      // error reading value
    }
  };

  const setStorageLanguage = (value: TLanguage) => {
    setStorageLanguage(value)
    setLanguage(value)
  }

  useEffect(() => {
    getStoreLanguage()
  }, [])

  const value: TMainContextType = {
    dictionary: selectDictionary(language),
    language,
    setLanguage: setStoreLanguage,
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
