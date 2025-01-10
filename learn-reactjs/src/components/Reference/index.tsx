import React, { useRef } from "react";

const ReferenceApp: React.FC = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          //   console.log("Hello Ref: ", inputRef.current);
          // @ts-ignore
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
};

export default ReferenceApp;
