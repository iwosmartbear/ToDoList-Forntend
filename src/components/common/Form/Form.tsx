import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useState} from "react";

import './Form.css'
import {ToDoDTO} from "../../../types/fetchTypes";
import {clearToDoObject} from "../../../utils/variables";


export function Form(){
    const [myState, setMyState] = useState<ToDoDTO>(clearToDoObject);

    function handleChange(nameOfValue: string, val: string){
        setMyState({
            ...myState,
            [`${nameOfValue}`]:val,
        })
    }
    function clearState(){
        setMyState(clearToDoObject)
    }

    function handleSubmit(){

    }

    return <form className="main-form">
        <Input
            type="text"
            value={myState.taskContent}
            text="What is your task: "
            name="mainInput"
            className="mainInput"
            minLength={3}
            maxLength={200}
            func={(e)=>handleChange("taskContent", e.target.value)}
        />
        <Input
            type="text"
            value={myState.category}
            text="Category of task: "
            name="mainInputCategory"
            className="mainInputCategory"
            minLength={2}
            maxLength={25}
            func={(e)=>handleChange("category", e.target.value)}
        />
        <Input
            type="number"
            value={myState.priority}
            text="Priority: "
            name="mainInputPriority"
            className="mainInputPriority"
            min={1}
            max={5}
            func={(e)=>handleChange("priority", e.target.value)}
        />
        <Input
            type="date"
            value={myState.dueDate as string}
            text="Due Date: "
            name={new Date().getDate().toString()}
            className="mainInputDate"
            func={(e)=>handleChange("dueDate", e.target.value)}
        />
        <Button
            // onClick={handleSubmit}
            className="formButton"
            text="Send ToDO"
        />
    </form>
}
