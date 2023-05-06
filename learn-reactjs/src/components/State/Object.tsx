import React, { useState } from "react";

type StudentTypeContact = {
  phone: string;
  address: string;
};

type StudentType = {
  id: number;
  name: string;
  contact: StudentTypeContact;
};

const ObjectState: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentType>({
    id: 1,
    name: "kok",
    contact: {
      phone: "855-12345678",
      address: "Phnom Penh",
    },
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "n/a" : e.target.value;
    setStudentData({
      ...studentData,
      contact: { ...studentData.contact, address: value },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let result: StudentType = { ...studentData };
    const name = e.target.name;
    const value = e.target.value === "" ? "n/a" : e.target.value;

    if (name.startsWith("contact")) {
      result = {
        ...result,
        contact: {
          ...result.contact,
          [name.split(".")[1]]: value,
        },
      };
    } else {
      result = {
        ...result,
        [name]: value,
      };
    }

    setStudentData(result);
  };

  return (
    <div>
      <div>
        <label htmlFor="id">ID: </label>
        <input name="id" type="number" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input name="name" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input name="contact.phone" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        <input name="contact.address" type="text" onChange={handleChange} />
      </div>

      <br />

      <div>
        Result:
        <div>ID: {studentData !== undefined ? studentData.id : "n/a"}</div>
        <div>Name: {studentData !== undefined ? studentData.name : "n/a"}</div>
        <div>
          Phone: {studentData !== undefined ? studentData.contact.phone : "n/a"}
        </div>
        <div>
          Address:{" "}
          {studentData !== undefined ? studentData.contact.address : "n/a"}
        </div>
      </div>
    </div>
  );
};

export default ObjectState;
