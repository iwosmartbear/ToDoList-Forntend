import React, {useContext, useEffect, useState} from "react";

import {ToDoDTO} from "../../types/fetchTypes";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {Sorter} from "../Sorter/Sorter";
import {Messager} from "../Messager/Mesager";

export const MainView = () => {
    const {listOfToDos, isMessage, resetError} = useContext(ToDoListContext);
    const [showMainView, setShowMainView] = useState(false);

    useEffect(() => {
        if (listOfToDos) {
            setShowMainView(true);
        }
        resetError();
    }, [listOfToDos])

    return <div className="mainView">
        <h1>MainView</h1>
        <Sorter></Sorter>
        {!showMainView ?
            <div>
                {isMessage || <Messager
                    title="Loading..."
                    isButton={false}
                    className="message__content"
                    message={["waiting for data"]}
                />}
            </div> :
            (listOfToDos as ToDoDTO[]).map(el => <ToDoItem
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