import uuid from "react-uuid";

export type ToDoEntryType = {
  id: string;
  value: string;
  isDone: boolean;
};

export type ToDoEntriesType = ToDoEntryType[];

export const createToDoEntry = (
  value: string,
  isDone: boolean
): ToDoEntryType => {
  return {
    id: "Entry-" + uuid(),
    value: value,
    isDone: isDone,
  };
};
