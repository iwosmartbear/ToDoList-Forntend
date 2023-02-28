import {config} from "../config/config";
import {headerAndBodyObject, ToDoDTO, ToDoObject} from "../types/fetchTypes";
import moment from "moment";


export const fetchToAPI = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, toDoToChange?: ToDoDTO): Promise<ToDoObject | ToDoObject[] | string | null> => {
    const hostUrl = config.hostUrl;
    try {
        const response = await fetch(`${hostUrl}${path}`, createHeaderAndBodyObject(method, toDoToChange));
        const data = await response.json();
        if (data.length === 0) {
            throw new Error("There is no data to show.")
        }
        return data;
    } catch (err) {
        throw new Error((err as Error).message ? (err as Error).message : "Unknown Error")
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
    return moment(date).format('YYYY-MM-DD');
}