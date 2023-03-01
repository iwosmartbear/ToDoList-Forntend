import {Button} from "../common/Button/Button";

import './Sorter.css'
import {useContext} from "react";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {SortBy} from "../../utils/sortFunctions";
import {ToDoObject} from "../../types/fetchTypes";

export const Sorter = () => {
    const {direction, setSortBy, setDirection, sortListOfToDos, listOfToDos} = useContext(ToDoListContext);

    const handleSortingClick = (sortByFromClick: SortBy): void => {
        setSortBy(sortByFromClick);
        setDirection(!direction);
        sortListOfToDos(sortByFromClick, listOfToDos as ToDoObject[], direction)
    }

    return <div className="sorter">
        <Button text="A-Z" type="button" className="sort sorting-a-z" func={() => handleSortingClick("taskContent")}/>
        <Button text="Category" type="button" className="sort sorting-category"
                func={() => handleSortingClick("category")}/>
        <Button text="Priority" type="button" className="sort sorting-priority"
                func={() => handleSortingClick("priority")}/>
        <Button text="Due Date" type="button" className="sort sorting-dueDate"
                func={() => handleSortingClick("dueDate")}/>
    </div>
}
