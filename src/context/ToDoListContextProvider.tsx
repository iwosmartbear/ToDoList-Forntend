import React, {createContext, useEffect, useState} from "react";
import {ToDoObject} from "../types/fetchTypes";
import {fetchToAPI} from "../utils/functions";

export interface ContextInterFace {
    listOfToDos?: ToDoObject | ToDoObject[] | Promise<ToDoObject> | Promise<ToDoObject[]>;
    editedToDo?: ToDoObject;
    sortingStyle?: "priority" | "category" | "dueDate" | "taskContent";
    updateToDoListInContext: ()=>void;
}

export const ToDoListContext = createContext<ContextInterFace>({
    updateToDoListInContext: ()=>{},
});

type Props = {
    children: JSX.Element,
}

export const ToDoListContextProvider: React.FC<Props> = ({children}) => {
    const [toDoListContext, setToDoListContext] = useState<ContextInterFace>({
        listOfToDos: undefined,
        editedToDo: undefined,
        sortingStyle: "priority",
        updateToDoListInContext: updateToDoListInContext,
    });

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

    async function updateToDoListInContext(){
        const doFetch = async () => {
            try {
                const data = await fetchToAPI("GET", '/all') as ToDoObject[];
                return data;
            } catch (e) {
                throw new Error('Messed Up')
            }
        }
        doFetch().then(data => setToDoListContext((prevData: ContextInterFace)=> {
            console.log("before update")
            return {
                ...prevData,
                listOfToDos: data,
            }
        }));
    }


    return (
        <ToDoListContext.Provider value={toDoListContext}>
            {children}
        </ToDoListContext.Provider>)
}