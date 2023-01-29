import uuid from "react-uuid";

export const TODO_LIST_NAMES_KEY = "todo-list-names";

export type ToDoListNameType = {
  id: string;
  name: string;
};

export type ToDoListNamesType = ToDoListNameType[];

export const createToDoListName = (name: string): ToDoListNameType => {
  return {
    id: "List-" + uuid(),
    name: name,
  };
};
