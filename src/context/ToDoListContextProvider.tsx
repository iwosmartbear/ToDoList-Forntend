import React, {createContext, useEffect, useState} from "react";
import {ToDoObject} from "../types/fetchTypes";
import {fetchToAPI} from "../utils/functions";
import {SortBy, sortFunction} from "../utils/sortFunctions";

export interface ContextInterFace {
    listOfToDos?: ToDoObject | ToDoObject[] | Promise<ToDoObject> | Promise<ToDoObject[]>;
    editedToDo?: ToDoObject;
    sortBy?: SortBy;
    direction?: boolean;
    isMessage: boolean;
    message?: (string | ToDoObject)[];
    updateToDoListInContext: () => void;
    setSortBy: (sortBy: SortBy) => void;
    setDirection: (direction?: boolean) => void;
    sortListOfToDos: (sortBy: SortBy, listOfToDos: ToDoObject[], direction?: boolean) => void;
    setErrorMessage: (err: Error) => void;
    resetError: () => void;
    setIsMessage: (isMessage: boolean) => void;

}

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
    resetError: () => {
    },
    setIsMessage: () => {
    },
});

type Props = {
    children: JSX.Element,
}

export const ToDoListContextProvider: React.FC<Props> = ({children}) => {
    const [toDoListContext, setToDoListContext] = useState<ContextInterFace>({
        listOfToDos: undefined,
        editedToDo: undefined,
        isMessage: false,
        message: [],
        sortBy: "priority",
        direction: true,
        updateToDoListInContext,
        setSortBy,
        setDirection,
        sortListOfToDos,
        setErrorMessage,
        resetError,
        setIsMessage,
    });

    useEffect(() => {
        const doFetch = async () => {
            try {
                const data = await fetchToAPI("GET", '/all') as ToDoObject[];
                resetError()
                return data;
            } catch (err) {
                setErrorMessage(err as Error);
            }
        }
        doFetch().then(data => setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                isMessage: !data,
                listOfToDos: data,
            }
        }));

    }, []);

    async function updateToDoListInContext() {
        const doFetch = async () => {
            try {
                const data = await fetchToAPI("GET", '/all') as ToDoObject[];
                return data;
            } catch (err) {
                setErrorMessage(err as Error);
            }
        }
        doFetch().then(data => setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                isMessage: !!data,
                listOfToDos: sortFunction(toDoListContext.sortBy as SortBy, data as ToDoObject[], toDoListContext.direction),
            }
        }));
    }

    function setSortBy(sortBy: SortBy) {
        setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                sortBy,
            }
        });
    }

    function setErrorMessage(err?: Error) {
        setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                isMessage: !!(err as Error).message,
                message: (err as Error).message ? [(err as Error).message] : ["Something went wrong"],
            }
        })
    }

    function resetError() {
        setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                isMessage: false,
                message: [],
            }
        })
    }

    function setIsMessage(isMessage: boolean) {
        setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                isMessage: isMessage,
            }
        })
    }

    function setDirection(direction?: boolean) {
        setToDoListContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                direction,
            }
        });
    }

    function sortListOfToDos(sortBy: SortBy, listOfToDos: ToDoObject[], direction?: boolean) {
        const sortedList = sortFunction(sortBy, listOfToDos, direction);

        setToDoListContext((prevData: ContextInterFace) => {
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