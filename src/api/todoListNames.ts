import {
  ToDoListNamesType,
  TODO_LIST_NAMES_KEY,
  createToDoListName,
} from "../types/ToDoList";

export type GetToDoListNamesResponse = {
  items: ToDoListNamesType;
  status: number;
};

export type SaveToDoListNameResponse = {
  status: number;
};

export const getToDoListNames = () => {
  return new Promise<GetToDoListNamesResponse>((resolve, reject) => {
    const items: ToDoListNamesType = fetchToDoListNames();
    resolve({
      items: items,
      status: 200,
    });
  });
};

export const saveToDoListName = (listName: string) => {
  return new Promise<SaveToDoListNameResponse>((resolve, reject) => {
    const items: ToDoListNamesType = fetchToDoListNames();
    const updatedItems = [...items, createToDoListName(listName)];
    localStorage.setItem(TODO_LIST_NAMES_KEY, JSON.stringify(updatedItems));
    resolve({ status: 200 });
  });
};

const fetchToDoListNames = () => {
  const jsonItems = localStorage.getItem(TODO_LIST_NAMES_KEY);
  return jsonItems ? JSON.parse(jsonItems) : [];
};
