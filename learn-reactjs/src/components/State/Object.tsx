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

  return (
    <div>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" />
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
