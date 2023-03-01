import {ToDoDTO} from "../../types/fetchTypes";

import './ToDoItem.css'
import {Button} from "../common/Button/Button";
import {prioritiesArray, priorityToClassChecker, stringToPriority} from "../../utils/styleFunctions";
import {fetchToAPI} from "../../utils/functions";
import React, {useContext, useState} from "react";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {Input} from "../common/Input/Input";
import {MySelect} from "../common/Select/Select";


export const ToDoItem = ({id, dueDate, isOpen, taskContent, priority, category, ownerId}: ToDoDTO) => {
    const {updateToDoListInContext, setErrorMessage} = useContext(ToDoListContext);
    const [toDo, setToDo] = useState({
        id,
        dueDate,
        ownerId,
        isOpen,
        taskContent,
        priority,
        category
    } as ToDoDTO);

    function handleClose() {

        const response = fetchToAPI("PUT", '/edit', {...toDo, isOpen: isOpen === 1 ? 0 : 1})
            .then(e => updateToDoListInContext())
            .catch(err => setErrorMessage(err as Error));


    }

    function deleteElement() {
        const response = fetchToAPI("DELETE", '/delete', toDo)
            .then(data => updateToDoListInContext())
            .catch(err => setErrorMessage(err as Error));
    }

    function finishEditing() {
        const response = fetchToAPI("PUT", '/edit', toDo)
            .then(e => updateToDoListInContext())
            .catch(err => setErrorMessage(err as Error));
    }

    function handleChange(nameOfValue: string, val: string) {
        setToDo({
            ...toDo,
            [`${nameOfValue}`]: nameOfValue === "priority" ? stringToPriority(val) : val,
        })
    }

    return <div className={`ToDoItem${isOpen ? "" : " toDo__closed"} ${priorityToClassChecker(priority)}`}>
        <Input
            type="text"
            value={toDo.taskContent}
            name="mainInput"
            className={`taskContent`}
            minLength={3}
            maxLength={200}
            func={(e) => handleChange("taskContent", e.target.value)}
            funcTwo={() => finishEditing()}
        />
        <Input
            type="text"
            value={toDo.category}
            name="mainInputCategory"
            className="category"
            minLength={2}
            maxLength={25}
            func={(e) => handleChange("category", e.target.value)}
            funcTwo={() => finishEditing()}
        />
        {/*<div className="category">{category}</div>*/}
        {/*<div className="priority">{priorityToString(priority)}</div>*/}
        <MySelect
            text=""
            selectClass="priority"
            className="priority"
            val={priority}
            options={prioritiesArray}
            func={(e) => handleChange("priority", e.target.value)}
            funcTwo={() => finishEditing()}
        />
        {/*<div className="dueDate">{dueDate as string}</div>*/}
        <Input
            type="date"
            value={toDo.dueDate as string}
            name={new Date().getDate().toString()}
            className="dueDate"
            func={(e) => handleChange("dueDate", e.target.value)}
        />

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