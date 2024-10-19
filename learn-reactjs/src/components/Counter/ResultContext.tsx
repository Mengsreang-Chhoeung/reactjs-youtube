import React from "react";
import { useCounterContext } from "./context/counter.context";

const ResultContext: React.FC = () => {
  const { data } = useCounterContext();

  return <div>{data}</div>;
};

export default ResultContext;
