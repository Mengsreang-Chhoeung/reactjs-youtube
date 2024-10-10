import React, { useReducer } from "react";
import tasksReducer, { TTask } from "./reducers/tasksReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskApp: React.FC = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const handleAddTask = (text: string) => {
    dispatch({
      type: "added",
      payload: {
        id: new Date().getTime(),
        text,
        isDone: false,
      },
    });
  };

  const handleChangeTask = (task: TTask) => {
    dispatch({
      type: "changed",
      payload: task,
    });
  };

  const handleDeleteTask = (task: TTask) => {
    dispatch({
      type: "deleted",
      payload: task,
    });
  };

  console.log("hi tasks: ", tasks);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <h1>Greeting Task!</h1>
      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskApp;
