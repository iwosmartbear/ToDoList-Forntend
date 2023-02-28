import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {FormEvent, useContext, useState} from "react";
import {ToDoDTO} from "../../../types/fetchTypes";
import {clearToDoObject} from "../../../utils/variables";
import {changeDateFormat, fetchToAPI} from "../../../utils/functions";
import {prioritiesArray, stringToPriority} from "../../../utils/styleFunctions";
import {MySelect} from "../Select/Select";
import {ToDoListContext} from "../../../context/ToDoListContextProvider";


import './Form.css'


export function Form() {
    const {updateToDoListInContext} = useContext(ToDoListContext);
    const [toDo, setToDo] = useState<ToDoDTO>(clearToDoObject);

    function handleChange(nameOfValue: string, val: string) {
        setToDo({
            ...toDo,
            [`${nameOfValue}`]: nameOfValue === "priority" ? stringToPriority(val) : val,
        })
    }

    function clearState() {
        setToDo({
            ...clearToDoObject,
            dueDate: changeDateFormat(new Date()),
        });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = fetchToAPI("POST", '/add', toDo).then(e => updateToDoListInContext());
            clearState();

        } catch (e) {
            console.error(e);
        }
    }

    return <form className="main-form" onSubmit={handleSubmit}>
        <Input
            type="text"
            value={toDo.taskContent}
            text="What is your task: "
            name="mainInput"
            className="mainInput"
            minLength={3}
            maxLength={200}
            func={(e) => handleChange("taskContent", e.target.value)}
        />
        <Input
            type="text"
            value={toDo.category}
            text="Category of task: "
            name="mainInputCategory"
            className="mainInputCategory"
            minLength={2}
            maxLength={25}
            func={(e) => handleChange("category", e.target.value)}
        />
        <MySelect
            text="Choose priority"

            className="mainSelectPriority"
            options={prioritiesArray}
            func={(e) => handleChange("priority", e.target.value)}
        />
        <Input
            type="date"
            value={toDo.dueDate as string}
            text="Due Date: "
            name={new Date().getDate().toString()}
            className="mainInputDate"
            func={(e) => handleChange("dueDate", e.target.value)}
        />
        <Button
            className="formButton"
            text="Send ToDO"
            type="submit"
        />
    </form>
}
