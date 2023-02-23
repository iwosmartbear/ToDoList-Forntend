import React from "react";
import {ToDoDTO} from "../../types/fetchTypes";

interface props {
    listOfToDos: ToDoDTO[];
}

export const Calendar=({listOfToDos}: props)=>{

    return <div className="calendar">
        <h1>CalendarView</h1>
        {[listOfToDos].length === 0 ?
            <p>Nothing to show!</p> :
            (listOfToDos as ToDoDTO[]).map(el=><p key={(Math.random()*10000)}>task content: {el.taskContent}; task: category: {el.category}; task due date: {el.dueDate as string}</p>)}
    </div>
}