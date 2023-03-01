import {config} from "../config/config";
import {ToDoDTO} from "../types/fetchTypes";
import {changeDateFormat} from "./functions";

export const clearToDoObject: ToDoDTO = {
    id: "",
    category: "",
    dueDate: changeDateFormat(new Date()),
    isOpen: 1,
    ownerId: config.tempOwnerId,
    priority: 1,
    taskContent: "",
}