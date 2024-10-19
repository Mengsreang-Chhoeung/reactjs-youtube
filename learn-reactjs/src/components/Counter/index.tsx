import React, { useState } from "react";
import Result from "./Result";
import Action from "./Action";
import { CounterContextProvider } from "./context/counter.context";
import ResultContext from "./ResultContext";
import ActionContext from "./ActionContext";

const Counter: React.FC = () => {
  //   const [data, setData] = useState<number>(0);

  return (
    <CounterContextProvider>
      {/* Output Result */}
      {/* <Result data={data} /> */}
      <ResultContext />

      {/* Action buttons: Adding and Subtraction */}
      {/* <Action
        onAdding={() => {
          setData(data + 1);
        }}
        onSubtraction={() => {
          setData(data - 1);
        }}
      /> */}
      <ActionContext />
    </CounterContextProvider>
  );
};

export default Counter;
