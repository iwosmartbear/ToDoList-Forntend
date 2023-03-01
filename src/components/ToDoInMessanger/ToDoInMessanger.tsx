import {priorityToClassChecker} from "../../utils/styleFunctions";

import '../ToDoItem/ToDoItem.css'
import './ToDoInMessanger.css'

interface Props {
    taskContent: string;
    priority: number;
    isOpen: 0|1;
}

export const ToDoInMessanger = ({priority, taskContent, isOpen}: Props)=>{

    return <div className={`ToDoItemMessanger${isOpen ? "" : " toDo__closed"} ${priorityToClassChecker(priority)}`}>
        <div>{taskContent}</div>
    </div>
}