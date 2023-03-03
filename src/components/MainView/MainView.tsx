import React, {useContext, useEffect, useState} from "react";

import {ToDoObject} from "../../types/fetchTypes";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import {Sorter} from "../Sorter/Sorter";
import {Messager} from "../Messager/Mesager";
import {SortBy, sortFunction} from "../../utils/sortFunctions";
import {ErrPretender} from "../../types/ToDoContextTypes";
import { ToDoListContext } from "../../context/ToDoListContextCreateContext";

export const MainView = () => {
    const {listOfToDos, isMessage, resetError, sortBy, direction, setPretendErrorMessage} = useContext(ToDoListContext);
    const [showMainView, setShowMainView] = useState(false);

    useEffect(() => {
        const myTimeOut = setTimeout(()=>{
            setPretendErrorMessage({
                isMessage: true,
                message: "Sorry, it takes too long",
            } as ErrPretender)
        }, 2500)
        if (listOfToDos && (listOfToDos as ToDoObject[]).length > 0 ) {
            setShowMainView(true);
            clearTimeout(myTimeOut);
        } else {
            setShowMainView(false);
        }
            resetError();
    return ()=> clearTimeout(myTimeOut);
    }, [listOfToDos]);

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
            sortFunction(sortBy as SortBy, listOfToDos as ToDoObject[], direction).map(el => <ToDoItem
                key={el.extId}
                extId={el.extId}
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