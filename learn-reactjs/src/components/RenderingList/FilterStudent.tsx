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
  {
    id: 4,
    name: "Kok Bunna",
    grade: 10,
  },
  {
    id: 5,
    name: "Kok Seyha",
    grade: 10,
  },
  {
    id: 6,
    name: "Kok Makara",
    grade: 10,
  },
];

const FilterStudent: React.FC = () => {
  return (
    <div>
      {studentObject
        .filter((it) => it.grade === 10)
        .map((it) => (
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

export default FilterStudent;
