import { ToDoListNamesType, TODO_LIST_NAMES_KEY } from "../../types/ToDoList";

export const getToDoListNames = () => {
    return new Promise((resolve, reject) => {
        const jsonItems = localStorage.getItem(TODO_LIST_NAMES_KEY)
        const items: ToDoListNamesType = jsonItems ? JSON.parse(jsonItems) : []
        resolve({
            items: items,
            status: 200
        })
    })
}


export const setToDoListNames = (listNames: string[]) => {
    return new Promise((resolve, reject) => {
        localStorage.setItem(TODO_LIST_NAMES_KEY, JSON.stringify(listNames))
        resolve({status: 200});
    })
}