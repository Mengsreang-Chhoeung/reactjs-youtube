import React, { useState } from "react";
import { TTask } from "./reducers/tasksReducer";

interface TaskListProps {
  tasks: Array<TTask>;
  onChangeTask: (task: TTask) => void;
  onDeleteTask: (task: TTask) => void;
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const { tasks, onChangeTask, onDeleteTask } = props;
  const [isEditingIndex, setIsEditingIndex] = useState<number>();

  return (
    <div>
      {tasks.map((t, i) => (
        <div
          key={t.id}
          style={{ display: "flex", alignItems: "center", gap: "2px" }}
        >
          <input
            type="checkbox"
            defaultChecked={t.isDone}
            onChange={(e) => {
              onChangeTask({ ...t, isDone: e.target.checked });
            }}
          />
          {isEditingIndex === i ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                // @ts-ignore
                const text = e.target.task.value;

                onChangeTask({ ...t, text });
                setIsEditingIndex(undefined);
              }}
            >
              <input type="text" name="task" defaultValue={t.text} />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <p>{t.text}</p>
              <button
                onClick={() => {
                  setIsEditingIndex(i);
                }}
              >
                Edit
              </button>
            </>
          )}

          <button
            onClick={() => {
              onDeleteTask(t);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
