import {
  ToDoListNameType,
  ToDoListNamesType,
  TODO_LIST_NAMES_KEY,
} from "../types/ToDoList";
import uuid from "react-uuid";

type ItemResponseWithFlag = {
  isDeleted: boolean;
  item: ToDoListNameType;
};

export type GetToDoListNamesResponse = {
  items: ToDoListNamesType;
  status: number;
};

export type SaveToDoListNameResponse = {
  status: number;
};

export type RestoreToDoListNamesResponse = {
  status: number;
};

export type DeleteToDoListResponse = {
  status: number;
};

const createToDoListName = (name: string): ItemResponseWithFlag => {
  return {
    isDeleted: false,
    item: {
      id: "List-" + uuid(),
      name: name,
    },
  };
};

export const getToDoListNames = () => {
  return new Promise<GetToDoListNamesResponse>((resolve, reject) => {
    const items: ToDoListNamesType = fetchExistingToDoListNames();
    console.log(items);

    resolve({
      items: items,
      status: 200,
    });
  });
};

export const saveToDoListName = (listName: string) => {
  return new Promise<SaveToDoListNameResponse>((resolve, reject) => {
    const items: ItemResponseWithFlag[] = fetchToDoListNames();
    const updatedItems = [...items, createToDoListName(listName)];
    saveToDoList(updatedItems);
    resolve({ status: 200 });
  });
};

export const deleteToDoList = (listName: string) => {
  return new Promise<DeleteToDoListResponse>((resolve, reject) => {
    const items: ItemResponseWithFlag[] = fetchToDoListNames();
    const updatedItems = items.map((item) =>
      item.item.name === listName ? { ...item, isDeleted: true } : { ...item }
    );
    saveToDoList(updatedItems);
    resolve({ status: 200 });
  });
};

export const restoreToDoLists = (listNames: string[]) => {
  return new Promise<RestoreToDoListNamesResponse>((resolve, reject) => {
    const items: ItemResponseWithFlag[] = fetchToDoListNames();
    const updatedItems = items.map((item) =>
      listNames.includes(item.item.name)
        ? { ...item, isDeleted: true }
        : { ...item }
    );
    saveToDoList(updatedItems);
    resolve({ status: 200 });
  });
};

const saveToDoList = (items: ItemResponseWithFlag[]) =>
  localStorage.setItem(TODO_LIST_NAMES_KEY, JSON.stringify(items));

const fetchToDoListNames = (): ItemResponseWithFlag[] => {
  const jsonItems = localStorage.getItem(TODO_LIST_NAMES_KEY);
  const items: ItemResponseWithFlag[] = jsonItems ? JSON.parse(jsonItems) : [];
  return items;
};

const transform = (items: ItemResponseWithFlag[]): ToDoListNamesType => {
  return items.map((item) => item.item);
};

const fetchFilteredToDoListNames = (isDeleted: boolean): ToDoListNamesType => {
  const items = fetchToDoListNames();
  const filteredItems = items.filter((item) => item.isDeleted == isDeleted);
  return transform(filteredItems);
};

const fetchExistingToDoListNames = (): ToDoListNamesType =>
  fetchFilteredToDoListNames(false);

const fetchDeletedToDoListNames = (): ToDoListNamesType =>
  fetchFilteredToDoListNames(true);
