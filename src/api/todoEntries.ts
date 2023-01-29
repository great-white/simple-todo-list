import { ToDoEntriesType } from "../types/ToDoEntry";

const SAVED_ITEMS_KEY: string = "saved";

type SavedItemsResponse = {
  [key: string]: ToDoEntriesType;
};

export type GetToDoEntriesResponse = {
  status: number;
  items: ToDoEntriesType;
};

export type SaveToDoEntriesResponse = {
  status: 200;
};

export const getToDoEntries = (listName: string) => {
  return new Promise<GetToDoEntriesResponse>((resolve, reject) => {
    const items: ToDoEntriesType = fetchToDoEntries(listName);
    resolve({
      status: 200,
      items: items,
    });
  });
};

export const saveToDoEntries = (listName: string, entries: ToDoEntriesType) => {
  return new Promise<SaveToDoEntriesResponse>((resolve, reject) => {
    const items: SavedItemsResponse = fetchAllToDoEntries();
    const updatedItems = { ...items, [listName]: entries };
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(updatedItems));
    resolve({
      status: 200,
    });
  });
};

const fetchAllToDoEntries = () => {
  const savedJsonItems = localStorage.getItem(SAVED_ITEMS_KEY);
  return savedJsonItems ? JSON.parse(savedJsonItems) : {};
};

const fetchToDoEntries = (listName: string) => {
  const savedItems: SavedItemsResponse = fetchAllToDoEntries();
  return savedItems[listName] ? savedItems[listName] : [];
};
