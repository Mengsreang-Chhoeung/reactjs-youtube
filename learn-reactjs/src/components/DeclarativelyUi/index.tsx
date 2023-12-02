import React, { useState } from "react";

const DeclarativelyUi: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [status, setStatus] = useState<
    "typing" | "success" | "submitting" | "error"
  >("typing");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm();
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  const submitForm = () => {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const inputData = data.toLowerCase();
        if (inputData === "kok") {
          res();
        } else {
          rej(new Error("Error"));
        }
      }, 1500);
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "160px",
        gap: "4px",
      }}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="input anything..."
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        disabled={status === "submitting"}
      />
      <button
        type="submit"
        style={{ cursor: "pointer" }}
        disabled={data.length <= 0 || status === "submitting"}
      >
        Submit
      </button>

      {status === "success" && <p style={{ color: "green" }}>Success</p>}
      {status === "error" && <p style={{ color: "red" }}>Error</p>}
    </form>
  );
};

export default DeclarativelyUi;
