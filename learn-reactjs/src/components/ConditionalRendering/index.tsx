import React from "react";

interface ItemProps {
  name: string;
  isPacked: boolean;
}

// using if else statement
// const Item: React.FC<ItemProps> = (props) => {
//   const { name, isPacked } = props;

//   if (isPacked) {
//     return <li>{name} ✅</li>;
//   }
//   return <li>{name}</li>;
// };

// using if else statement and if true return null
// const Item: React.FC<ItemProps> = (props) => {
//   const { name, isPacked } = props;

//   if (isPacked) {
//     return null;
//   }
//   return <li>{name}</li>;
// };

// using ternary operator
const Item: React.FC<ItemProps> = (props) => {
  const { name, isPacked } = props;

  // return <li>{name} {isPacked ? "✅" : "" }</li>;

  return isPacked ? null : <li>{name}</li>;
};

export default Item;
