import {ToDoDTO} from "../../types/fetchTypes";

import './ToDoItem.css'
import {Button} from "../common/Button/Button";
import {priorityToClassChecker, priorityToString} from "../../utils/styleFunctions";
export const ToDoItem = ({dueDate, isOpen, taskContent, priority, category}: ToDoDTO) => {
    return <div className={`ToDoItem${isOpen ? " toDo__opened" : " toDo__closed"} ${priorityToClassChecker(priority)}`}>
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