import uuid from "react-uuid";

export type ToDoListNameType = {
  id: string;
  name: string;
};

export type ToDoListNamesType = ToDoListNameType[];

export const createToDoListName = (name: string): ToDoListNameType => {
  return {
    id: uuid(),
    name: name,
  };
};
