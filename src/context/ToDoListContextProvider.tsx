import React, {createContext, useEffect, useState} from "react";
import {ToDoObject} from "../types/fetchTypes";
import {fetchToAPI} from "../utils/functions";

export interface ContextInterFace {
    listOfToDos?: ToDoObject | ToDoObject[] | Promise<ToDoObject> | Promise<ToDoObject[]>;
    editedToDo?: ToDoObject;
    sortingStyle?: "priority" | "category" | "dueDate" | "taskContent";
}

export const ToDoListContext = createContext<ContextInterFace>({});

type Props = {
    children: JSX.Element,
}

export const ToDoListContextProvider: React.FC<Props> = ({children}) => {
    const [toDoListContext, setToDoListContext] = useState<ContextInterFace>({});

    useEffect(() => {
        const doFetch = async () => {
            try {
                const data = await fetchToAPI("GET", '/all') as ToDoObject[];
                return data;
            } catch (e) {
                throw new Error('Messed Up')
            }
        }
        doFetch().then(data => setToDoListContext((prevData: ContextInterFace)=> {
            return {
                ...prevData,
                listOfToDos: data,
            }
        }));
    }, []);


    return (
        <ToDoListContext.Provider value={toDoListContext}>
            {children}
        </ToDoListContext.Provider>)
}