import {config} from "../config/config";
import {headerAndBodyObject, ToDoDTO, ToDoObject} from "../types/fetchTypes";


export const fetchToAPI = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, toDoToChange?: ToDoDTO): Promise<ToDoObject | ToDoObject[] | string | null> => {
    const hostUrl = config.hostUrl;
    try {
        const response = await fetch(`${hostUrl}${path}`, createHeaderAndBodyObject(method, toDoToChange));
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err)
        return [{
            ownerId: "",
            taskContent: err ? (err as Error).message : "Unknown Error",
            category: "Error",
            priority: 5,
            isOpen: 1,
            dueDate: new Date().toDateString(),
        }] as ToDoObject[];

        //@TODO have to change it for sure, I'll create message box to show errors and messages
        // return err ? (err as Error).message : null;
    }
}
const createHeaderAndBodyObject = (method: string, toDoToChange?: ToDoDTO): headerAndBodyObject => {
    const headers = {
        'Content-Type': 'application/json',
        'token': config.tempOwnerId,
    };
    const body = toDoToChange ?
        JSON.stringify(toDoToChange)
        : null;

    if (body) {
        return {
            method,
            headers,
            body,
        }
    }
    return {
        method,
        headers,
    }
}

export const changeDateFormat = (date: Date) => {
    return date.toISOString().slice(0, 10);
}