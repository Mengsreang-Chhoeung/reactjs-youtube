import React, { useState } from "react";

type StudentType = {
  id: number;
  name: string;
};

const ObjectState: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentType>({
    id: 1,
    name: "kok",
  });

  console.log("Hello Student Data: ", studentData);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "0" : e.target.value;
    setStudentData({ ...studentData, id: parseInt(value) });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "n/a" : e.target.value;
    setStudentData({ ...studentData, name: value });
  };

  return (
    <div>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="number" onChange={handleIdChange} />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" onChange={handleNameChange} />
      </div>

      <br />

      <div>
        Result:
        <div>ID: {studentData !== undefined ? studentData.id : "n/a"}</div>
        <div>Name: {studentData !== undefined ? studentData.name : "n/a"}</div>
      </div>
    </div>
  );
};

export default ObjectState;
