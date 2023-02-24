import React, {useContext, useEffect, useState} from "react";
import {ToDoDTO} from "../../types/fetchTypes";
import {ToDoListContext} from "../../context/ToDoListContextProvider";

export const Calendar=()=>{
    const {listOfToDos} = useContext(ToDoListContext);
    const [showCalendar, setShowCalendar] = useState(false)

    useEffect(()=>{
        if (listOfToDos){
            setShowCalendar(true)
        }
    },[listOfToDos])

    return <div className="calendar">
        <h1>CalendarView</h1>
        {showCalendar ?
            (listOfToDos as ToDoDTO[]).map(el=><p key={(Math.random()*10000)}>task content: {el.taskContent}; task: category: {el.category}; task due date: {el.dueDate as string}</p>):
            <p>no Calendar</p>
        }</div>
}