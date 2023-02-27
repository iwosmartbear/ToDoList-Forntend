import React, {useContext, useEffect, useState} from "react";
import {ToDoDTO} from "../../types/fetchTypes";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {Sorter} from "../Sorter/Sorter";

export const MainView=()=>{
    const {listOfToDos} = useContext(ToDoListContext);
    const [showMainView, setShowMainView] = useState(false)

    useEffect(()=>{
        if (listOfToDos){
            setShowMainView(true);
        }
    },[listOfToDos])

    return <div className="mainView">
        <h1>MainView</h1>
        <Sorter></Sorter>
        {!showMainView ?
            <p>Nothing to show!</p> :
            (listOfToDos as ToDoDTO[]).map(el=><ToDoItem
                key={el.id}
                id={el.id}
                ownerId={el.ownerId}
                taskContent={el.taskContent}
                category={el.category}
                priority={el.priority}
                isOpen={el.isOpen}
                dueDate={el.dueDate}
            />)
        }
    </div>
}