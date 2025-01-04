import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskAppProvider } from "./context/task-app.context";

const TaskApp2: React.FC = () => {
  return (
    <TaskAppProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <h1>Greeting Task!</h1>
        <AddTask />

        <TaskList />
      </div>
    </TaskAppProvider>
  );
};

export default TaskApp2;
