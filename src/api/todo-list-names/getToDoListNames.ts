import { ToDoListNamesType } from "../../types/ToDoList";

export const TODO_LIST_NAMES_KEY = "todo-list-names";

export const getToDoListNames = () => {
    return new Promise((resolve, reject) => {
        const jsonItems = localStorage.getItem(TODO_LIST_NAMES_KEY)
        const items: ToDoListNamesType = jsonItems ? JSON.parse(jsonItems) : []
        resolve(items)
    })
}


export const setToDoListNames = (listNames: string[]) => {
    return new Promise((resolve, reject) => {
        localStorage.setItem(TODO_LIST_NAMES_KEY, JSON.stringify(listNames))
        resolve(200);
    })
}