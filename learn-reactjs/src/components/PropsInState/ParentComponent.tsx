import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [mm, setMM] = useState<number>(10);

  return (
    <div>
      <p>Hi {mm}</p>
      <button
        onClick={() => {
          setAmount(amount + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setAmount(amount - 1);
        }}
      >
        -
      </button>

      <ChildComponent amount={amount} />
    </div>
  );
};

export default ParentComponent;
