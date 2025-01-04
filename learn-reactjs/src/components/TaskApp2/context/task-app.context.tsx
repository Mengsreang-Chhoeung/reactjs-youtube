import React, { createContext, Dispatch, useContext, useReducer } from "react";
import tasksReducer, { TTask, TTaskAction } from "../reducers/tasksReducer";

type TTaskApp = {
  tasks: Array<TTask>;
  dispatch: Dispatch<TTaskAction>;
};

const TaskAppContext = createContext<TTaskApp | null>(null);

export const TaskAppProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TaskAppContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskAppContext.Provider>
  );
};

export const useTaskAppContext = () => {
  const context = useContext(TaskAppContext);
  if (!context) throw new Error("Cannot access task app context!");

  return context;
};
