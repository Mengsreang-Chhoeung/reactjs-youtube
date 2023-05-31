import React, { useState } from "react";

type StudentType = {
  id?: number;
  name?: string;
  isEdit?: boolean;
};

const ArrayState: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentType>();
  const [editStudentData, setEditStudentData] = useState<StudentType>();
  const [studentListData, setStudentListData] = useState<StudentType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.length > 0 ? e.target.value : "n/a";

    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.length > 0 ? e.target.value : "n/a";

    setEditStudentData({
      ...editStudentData,
      [name]: value,
    });
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

      <button
        onClick={() => {
          // setStudentListData([
          //   ...studentListData,
          //   { id: studentData?.id, name: studentData?.name },
          // ]);

          setStudentListData([
            { id: studentData?.id, name: studentData?.name },
            ...studentListData,
          ]);
        }}
      >
        Add
      </button>

      <br />
      <br />

      <div>Result:</div>
      <div>
        {studentListData.map((it) => (
          <React.Fragment key={it.id}>
            <hr />
            {it.isEdit ? (
              <>
                <div>
                  <label htmlFor="id">ID: </label>
                  <input
                    name="id"
                    type="number"
                    onChange={handleEditChange}
                    defaultValue={editStudentData?.id}
                  />
                </div>
                <div>
                  <label htmlFor="name">Name: </label>
                  <input
                    name="name"
                    type="text"
                    onChange={handleEditChange}
                    defaultValue={editStudentData?.name}
                  />
                </div>
              </>
            ) : (
              <>
                <div>ID: {it?.id}</div>
                <div>Name: {it?.name}</div>
              </>
            )}
            <button
              onClick={() => {
                let updateStudentData: StudentType = {};
                const updateStudentListData = studentListData.map((ite) => {
                  if (ite.isEdit) {
                    return {
                      id: editStudentData?.id,
                      name: editStudentData?.name,
                      isEdit: false,
                    };
                  } else {
                    if (ite.id === it.id) {
                      updateStudentData = { ...ite };
                      return { ...ite, isEdit: true };
                    } else return ite;
                  }
                });
                if (Object.keys(updateStudentData).length > 0)
                  setEditStudentData(updateStudentData);
                setStudentListData(updateStudentListData);
              }}
            >
              {it.isEdit ? "Save" : "Edit"}
            </button>
            <button
              onClick={() => {
                setStudentListData(
                  studentListData.filter((ite) => ite.id !== it.id)
                );
              }}
            >
              Delete
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ArrayState;
