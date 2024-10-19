import React from "react";

interface ResultProps {
  data: number;
}

const Result: React.FC<ResultProps> = (props) => {
  const { data } = props;

  return <div>{data}</div>;
};

export default Result;
