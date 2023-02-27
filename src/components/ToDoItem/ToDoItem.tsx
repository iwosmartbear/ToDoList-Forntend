import {ToDoDTO} from "../../types/fetchTypes";

import './ToDoItem.css'
import {Button} from "../common/Button/Button";
import {priorityToClassChecker, priorityToString} from "../../utils/styleFunctions";
import {fetchToAPI} from "../../utils/functions";
import {useContext, useState} from "react";
import {ToDoListContext} from "../../context/ToDoListContextProvider";


export const ToDoItem = ({id, dueDate, isOpen, taskContent, priority, category, ownerId}: ToDoDTO) => {
    const { updateToDoListInContext} = useContext(ToDoListContext);
    const [toDo, setToDo] = useState({
        id,
        dueDate,
        ownerId,
        isOpen: isOpen ===1 ? 0 : 1,
        taskContent,
        priority,
        category} as ToDoDTO);
    function handleClose() {
        try {
            const response = fetchToAPI("PUT", '/edit',  toDo)
        .then(e=> updateToDoListInContext());


        } catch (e) {
            console.error(e);
        }
    }

    function deleteElement(){
        try {
            const response = fetchToAPI("DELETE", '/delete',  toDo)
                .then(e=> updateToDoListInContext());
            console.log("afterupdate")

        } catch (e) {
            console.error(e);
        }
    }

    return <div className={`ToDoItem${isOpen ? "" : " toDo__closed"} ${priorityToClassChecker(priority)}`}>
        <div className="taskContent">{taskContent}</div>
        <div className="category">{category}</div>
        <div className="priority">{priorityToString(priority)}</div>
        <div className="dueDate">{dueDate as string}</div>
        <Button
            text={isOpen ? "Close" : "Reopen"}
            type="button"
            className={isOpen ? "button__opened" : "button__closed"}
            func={handleClose}
        ></Button>
        <Button
            text="delete"
            type="button"
            className="delete"
            func={deleteElement}
        ></Button>
    </div>
}