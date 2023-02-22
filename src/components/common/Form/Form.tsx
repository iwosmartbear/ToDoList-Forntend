import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useState} from "react";

export function Form(){
    const [myState, setMyState] = useState({});

    function handleChange(val: string){
        setMyState(val)
    }

    return <form>
        <Input
            type="text"
            value=""
            text="Name Your ToDo My Friend"
            name="mainInput"
            className="mainInput"
            func={(e)=>handleChange(e.target.value)}
        />
        <Input
            type="date"
            value={new Date().toDateString()}
            text="Choose a date for your ToDo"
            name={new Date().getDate().toString()}
            className="mainInputDate"
        />
        <Button />
    </form>
}
