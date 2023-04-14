import React from "react";

type StudentModel = {
  id: number;
  name: string;
  grade: number;
};

const studentObject: StudentModel[] = [
  {
    id: 1,
    name: "Kok Koko",
    grade: 10,
  },
  {
    id: 2,
    name: "Kok Thyda",
    grade: 12,
  },
  {
    id: 3,
    name: "Kok Chenda",
    grade: 8,
  },
];

const Student: React.FC = () => {
  return (
    <div>
      {studentObject.map((it) => (
        <div>
          <p>ID: {it.id}</p>
          <p>Name: {it.name}</p>
          <p>Grade: {it.grade}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Student;
