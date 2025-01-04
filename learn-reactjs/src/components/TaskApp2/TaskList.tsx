import React, { useState } from "react";
import { useTaskAppContext } from "./context/task-app.context";

const TaskList: React.FC = () => {
  const { dispatch, tasks } = useTaskAppContext();
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
              dispatch({
                type: "changed",
                payload: { ...t, isDone: e.target.checked },
              });
            }}
          />
          {isEditingIndex === i ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                // @ts-ignore
                const text = e.target.task.value;

                dispatch({
                  type: "changed",
                  payload: { ...t, text },
                });
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
              dispatch({
                type: "deleted",
                payload: t,
              });
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
