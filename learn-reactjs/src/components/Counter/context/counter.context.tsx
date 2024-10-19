import React, { createContext, useContext, useState } from "react";

type TCounter = {
  data: number;
  onAdding: () => void;
  onSubtraction: () => void;
};

const CounterContext = createContext<TCounter | null>(null);

export const CounterContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const { children } = props;
  const [data, setData] = useState<number>(0);

  const onAdding = () => {
    setData(data + 1);
  };

  const onSubtraction = () => {
    setData(data - 1);
  };

  return (
    <CounterContext.Provider
      value={{
        data,
        onAdding,
        onSubtraction,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("Cannot access counter context!");

  return context;
};
