import {ToDoDTO} from "../types/fetchTypes";
import {changeDateFormat} from "./functions";
import {config} from "../config/config";

export const clearToDoObject: ToDoDTO = {
    extId: "",
    category: "",
    dueDate: changeDateFormat(new Date()),
    isOpen: 1,
    ownerId: config.tempOwnerId,
    priority: 1,
    taskContent: "",
}