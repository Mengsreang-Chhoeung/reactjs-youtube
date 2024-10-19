import React from "react";

interface ActionProps {
  onAdding: () => void;
  onSubtraction: () => void;
}

const Action: React.FC<ActionProps> = (props) => {
  const { onAdding, onSubtraction } = props;

  return (
    <div>
      <button onClick={onAdding}>+</button>
      <button onClick={onSubtraction}>-</button>
    </div>
  );
};

export default Action;
