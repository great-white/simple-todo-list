import uuid from "react-uuid";

export const TODO_LIST_NAMES = 'todo-list-names'

export type ToDoListName = {
    id: string;
    listName: string;
}

export const createIdForToDoListName = (): string => "ToDoListName-" + uuid()