import {ToDoDTO} from "../../types/fetchTypes";

import './ToDoItem.css'
import {Button} from "../common/Button/Button";
import {priorityToString} from "../../utils/styleFunctions";
interface props extends ToDoDTO{}

export const ToDoItem=({ ownerId, dueDate, isOpen, taskContent, priority, category }: props)=>{
    return<div className={`ToDoItem${isOpen ? " toDo__opened" : " toDo__closed"}`}>
        <div className="taskContent">{taskContent}</div>
        <div className="category">{category}</div>
        <div className="priority">{priorityToString(priority)}</div>
        <div className="dueDate">{dueDate as string}</div>
        <Button
            text={isOpen ? "Close" : "Reopen"}
            type={"submit"}
            className={isOpen ? "button__opened" : "button__closed"}
        ></Button>
        <Button
            text="delete"
            type="button"
            className="delete"
        ></Button>
    </div>
}