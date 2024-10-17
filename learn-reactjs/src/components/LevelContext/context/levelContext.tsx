import React, { createContext, useContext } from "react";

// 1. create a context
export const LevelContext = createContext<number>(0);

// 2. create a provider scope component
export const LevelContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <LevelContext.Provider value={1}>{props.children}</LevelContext.Provider>
  );
};

// 3. create a hook
export const useLevelContext = () => {
  const context = useContext(LevelContext);
  console.log("Hello context: ", context);
  if (!context) throw new Error("Cannot access this context value!");

  return context;
};
