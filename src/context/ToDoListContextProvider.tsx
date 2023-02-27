import React, {createContext, useEffect, useState} from "react";
import {ToDoObject} from "../types/fetchTypes";
import {fetchToAPI} from "../utils/functions";
import {SortBy, sortFunction} from "../utils/sortFunctions";

export interface ContextInterFace {
    listOfToDos?: ToDoObject | ToDoObject[] | Promise<ToDoObject> | Promise<ToDoObject[]>;
    editedToDo?: ToDoObject;
    sortBy?: SortBy;
    direction?: boolean;
    updateToDoListInContext: ()=>void;
    setSortBy: (sortBy: SortBy)=>void;
    setDirection: (direction?: boolean)=>void;
    sortListOfToDos: (sortBy: SortBy, listOfToDos: ToDoObject[], direction?: boolean)=>void;
}

export const ToDoListContext = createContext<ContextInterFace>({
    updateToDoListInContext: ()=>{},
    setSortBy: ()=>{},
    setDirection: ()=>{},
    sortListOfToDos: ()=>{},
});

type Props = {
    children: JSX.Element,
}

export const ToDoListContextProvider: React.FC<Props> = ({children}) => {
    const [toDoListContext, setToDoListContext] = useState<ContextInterFace>({
        listOfToDos: undefined,
        editedToDo: undefined,
        sortBy: "priority",
        direction: true,
        updateToDoListInContext: updateToDoListInContext,
        setSortBy: setSortBy,
        setDirection: setDirection,
        sortListOfToDos: sortListOfToDos,
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
            return {
                ...prevData,
                listOfToDos: data,
            }
        }));
    }
    function setSortBy(sortBy: SortBy){
        setToDoListContext((prevData: ContextInterFace)=> {
            return {
                ...prevData,
                sortBy,
            }
        });
    }
    function setDirection(direction?: boolean){

        setToDoListContext((prevData: ContextInterFace)=> {
            return {
                ...prevData,
                direction,
            }
        });
    }

    function sortListOfToDos(sortBy: SortBy, listOfToDos: ToDoObject[], direction?: boolean){
        const sortedList = sortFunction(sortBy, listOfToDos, direction);

        setToDoListContext((prevData: ContextInterFace)=> {
            return {
                ...prevData,
                listOfToDos: sortedList,
            }
        });
    }
    return (
        <ToDoListContext.Provider value={toDoListContext}>
            {children}
        </ToDoListContext.Provider>)
}