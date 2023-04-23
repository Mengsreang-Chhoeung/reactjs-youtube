import React, { useState } from "react";

const StateDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  console.log("Hello Rendering...");

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCounter}>+</button>
    </div>
  );
};

export default StateDemo;
