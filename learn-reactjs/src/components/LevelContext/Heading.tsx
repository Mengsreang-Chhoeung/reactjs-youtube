import React, { useContext } from "react";
import { LevelContext, useLevelContext } from "./context/levelContext";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { children } = props;
  // const level = useContext(LevelContext);
  const level = useLevelContext();

  console.log("hello level: ", level);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;

    default:
      throw Error("Unknown level: " + level);
  }
};

export default Heading;
