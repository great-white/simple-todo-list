import { ToDoEntries } from "./model/ToDoEntry";
import uuid from 'react-uuid'

export const getToDoEntries = (): ToDoEntries => [
    {
        id: uuid(),
        'isChecked': false,
        'name': 'Entry 1'
    },
    {
        id: uuid(),
        'isChecked': true,
        'name': 'Entry 2'
    }
]