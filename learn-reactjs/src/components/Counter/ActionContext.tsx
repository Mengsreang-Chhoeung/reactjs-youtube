import React from "react";
import { useCounterContext } from "./context/counter.context";

const ActionContext: React.FC = () => {
  const { onAdding, onSubtraction } = useCounterContext();

  return (
    <div>
      <button onClick={onAdding}>+</button>
      <button onClick={onSubtraction}>-</button>
    </div>
  );
};

export default ActionContext;
