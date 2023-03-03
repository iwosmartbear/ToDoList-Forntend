import {ToDoObject} from "../types/fetchTypes";
import {SortBy} from "../utils/sortFunctions";
import {ErrPretender} from "../types/ToDoContextTypes";

export interface ContextInterFace {
    listOfToDos?: ToDoObject[] | Promise<ToDoObject[]>;
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
    setPretendErrorMessage: (errPretender: ErrPretender) => void;
    resetError: () => void;
    setIsMessage: (isMessage: boolean) => void;

}