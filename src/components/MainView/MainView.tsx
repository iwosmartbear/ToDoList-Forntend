import React, {useContext, useEffect, useState} from "react";

import {ToDoObject} from "../../types/fetchTypes";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {Sorter} from "../Sorter/Sorter";
import {Messager} from "../Messager/Mesager";
import {SortBy, sortFunction} from "../../utils/sortFunctions";

export const MainView = () => {
    const {listOfToDos, isMessage, resetError, sortBy, direction} = useContext(ToDoListContext);
    const [showMainView, setShowMainView] = useState(false);

    useEffect(() => {
        if (listOfToDos && (listOfToDos as ToDoObject[]).length > 0 ) {
            setShowMainView(true);
            resetError();
        } else {
            setShowMainView(false);
        }

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