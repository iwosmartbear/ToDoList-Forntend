import React, {useContext, useEffect, useState} from "react";
import {ToDoDTO} from "../../types/fetchTypes";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {Messager} from "../Messager/Mesager";
import {useNavigate} from "react-router-dom";

export const Calendar=()=>{
    const {listOfToDos, isMessage, message, resetError} = useContext(ToDoListContext);
    const [showCalendar, setShowCalendar] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if (listOfToDos){
            setShowCalendar(true)
        }
        resetError();
    },[listOfToDos])

    function navigateTo(): void{
        navigate('/');
    }

    return <div className="calendar">
        <h1>CalendarView</h1>
        {isMessage && <Messager
            text="Loading..."
            isButton={true}
            type="button"
            className="message__content"
            isInMiddle={true}
            message={message}
            func={navigateTo}
        />}
        {showCalendar ?
            (listOfToDos as ToDoDTO[]).map(el=><p key={(Math.random()*10000)}>task content: {el.taskContent}; task: category: {el.category}; task due date: {el.dueDate as string}</p>):
            <div>
                {isMessage || <Messager
                    text="Loading..."
                    isButton={false}
                    className="message__content"
                    message="waiting for data"
                />}
            </div>
        }</div>
}