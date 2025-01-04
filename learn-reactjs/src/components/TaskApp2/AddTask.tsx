import React from "react";
import { useTaskAppContext } from "./context/task-app.context";

const AddTask: React.FC = () => {
  const { dispatch } = useTaskAppContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // @ts-ignore
        const text = e.target.task.value;

        if (!text) alert("Task is required!");
        else {
          dispatch({
            type: "added",
            payload: {
              id: new Date().getTime(),
              text,
              isDone: false,
            },
          });

          // @ts-ignore
          e.target.reset();
        }
      }}
    >
      <input name="task" type="text" placeholder="Add task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
