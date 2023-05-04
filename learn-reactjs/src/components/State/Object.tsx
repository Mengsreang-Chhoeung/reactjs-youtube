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

  console.log("Hello Student Data: ", studentData);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "0" : e.target.value;
    setStudentData({ ...studentData, id: parseInt(value) });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "n/a" : e.target.value;
    setStudentData({ ...studentData, name: value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "n/a" : e.target.value;
    setStudentData({
      ...studentData,
      contact: { ...studentData.contact, phone: value },
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "n/a" : e.target.value;
    setStudentData({
      ...studentData,
      contact: { ...studentData.contact, address: value },
    });
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
      <div>
        <label htmlFor="phone">Phone: </label>
        <input type="text" onChange={handlePhoneChange} />
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        <input type="text" onChange={handleAddressChange} />
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
