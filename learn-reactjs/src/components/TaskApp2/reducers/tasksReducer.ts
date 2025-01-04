export type TTaskAction = {
  type: "added" | "changed" | "deleted";
  payload: TTask;
};

export type TTask = {
  id: number;
  text: string;
  isDone: boolean;
};

const tasksReducer = (
  tasks: Array<TTask>,
  action: TTaskAction
): Array<TTask> => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
          isDone: action.payload.isDone,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.payload.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default tasksReducer;
