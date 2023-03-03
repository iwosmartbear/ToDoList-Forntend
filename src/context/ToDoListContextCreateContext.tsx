import {createContext} from "react";
import {ContextInterFace} from "./ToDoListContextInterfae";

export const ToDoListContext = createContext<ContextInterFace>({
    isMessage: false,
    updateToDoListInContext: () => {
    },
    setSortBy: () => {
    },
    setDirection: () => {
    },
    sortListOfToDos: () => {
    },
    setErrorMessage: () => {
    },
    setPretendErrorMessage: () => {
    },
    resetError: () => {
    },
    setIsMessage: () => {
    },
});