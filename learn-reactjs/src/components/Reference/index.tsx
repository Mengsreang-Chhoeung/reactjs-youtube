import React, { useRef, forwardRef, useImperativeHandle } from "react";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface MyInputRef {
  focus: () => void;
}

// const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => (
//   <input {...props} ref={ref} />
// ));

const MyInput = forwardRef<MyInputRef, MyInputProps>((props, ref) => {
  const realInputRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus() {
      realInputRef.current?.focus();
    },
  }));

  return <input {...props} ref={realInputRef} />;
});

const ReferenceApp: React.FC = () => {
  const inputRef = useRef<MyInputRef | null>(null);

  return (
    <div>
      <MyInput ref={inputRef} />
      <button
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
            // inputRef.current.style.backgroundColor = "red";
          }
        }}
      >
        Focus
      </button>
    </div>
  );
};

export default ReferenceApp;
