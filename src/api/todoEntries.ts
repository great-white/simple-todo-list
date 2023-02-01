import { ToDoEntriesType } from "../types/ToDoEntry";

const SAVED_ITEMS_KEY: string = "saved";

type ItemsResponseWithFlag = {
  [key: string]: {
    isDeleted: boolean;
    entries: ToDoEntriesType;
  };
};

type ItemsResponse = {
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
    const items: ToDoEntriesType = fetchExistingToDoEntries(listName);
    resolve({
      status: 200,
      items: items,
    });
  });
};

export const saveToDoEntries = (listName: string, entries: ToDoEntriesType) => {
  return new Promise<SaveToDoEntriesResponse>((resolve, reject) => {
    const items: ItemsResponseWithFlag = fetchAllToDoEntries();
    const updatedItems = {
      ...items,
      [listName]: { entries: entries, isDeleted: false },
    };
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(updatedItems));
    resolve({
      status: 200,
    });
  });
};

const transform = (items: ItemsResponseWithFlag): ItemsResponse => {
  const transformedItems = Object.entries(items).map(([key, value]) => [
    key,
    value.entries,
  ]);
  return Object.fromEntries(transformedItems);
};

const fetchAllToDoEntries = (): ItemsResponseWithFlag => {
  const savedJsonItems = localStorage.getItem(SAVED_ITEMS_KEY);
  const savedItems: ItemsResponseWithFlag = savedJsonItems
    ? JSON.parse(savedJsonItems)
    : {};
  return savedItems;
};

const fetchFilteredToDoEntries = (
  isDeleted: boolean
): ItemsResponseWithFlag => {
  const savedItems: ItemsResponseWithFlag = fetchAllToDoEntries();
  const filteredItems = Object.entries(savedItems).filter(
    ([key, value]) => value.isDeleted === isDeleted
  );
  return Object.fromEntries(filteredItems);
};

const fetchAllExistingToDoEntries = (): ItemsResponse =>
  transform(fetchFilteredToDoEntries(false));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchAllDeletedToDoEntries = (): ItemsResponse =>
  transform(fetchFilteredToDoEntries(true));

const fetchExistingToDoEntries = (listName: string) => {
  const savedItems: ItemsResponse = fetchAllExistingToDoEntries();
  return savedItems[listName] ? savedItems[listName] : [];
};
