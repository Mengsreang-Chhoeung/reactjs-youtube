import React, { useState } from "react";

interface ChildComponentProps {
  amount: number;
}

const ChildComponent: React.FC<ChildComponentProps> = (props) => {
  const { amount } = props;

  // const [am, setAM] = useState<number>(amount);

  console.log("hi child");

  return <div>{amount}</div>;
};

export default ChildComponent;
