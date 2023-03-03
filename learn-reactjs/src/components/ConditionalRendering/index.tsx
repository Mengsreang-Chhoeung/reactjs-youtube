import React from "react";

interface ItemProps {
  name: string;
  isPacked: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const { name, isPacked } = props;

  if (isPacked) {
    return <li>{name} ✅</li>;
  }
  return <li>{name}</li>;
};

export default Item;
