import {ToDoObject} from "../types/fetchTypes";

export type SortBy = "priority" | "category" | "dueDate" | "taskContent";

export const sortFunction = (sortBy: SortBy, listOfToDos: ToDoObject[], direction?: boolean | undefined): ToDoObject[] => {
    const result = listOfToDos.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return direction ? -1 : 1;
        } else if (a[sortBy] > b[sortBy]) {
            return direction ? 1 : -1;
        } else {
            return 0;
        }
    })

    return result;
}