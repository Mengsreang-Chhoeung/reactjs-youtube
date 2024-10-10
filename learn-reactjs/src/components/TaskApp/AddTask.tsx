import React from "react";

interface AddTaskProps {
  onAddTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = (props) => {
  const { onAddTask } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // @ts-ignore
        const text = e.target.task.value;

        if (!text) alert("Task is required!");
        else {
          onAddTask(text);
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
