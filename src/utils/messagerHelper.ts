import {ToDoObject} from "../types/fetchTypes";

export const checkIfDataIsGoodToShowInMessager = (message: string[] | ToDoObject[]): boolean =>{
    return message && (message as string[] | ToDoObject[]).length !== 0 && message[0] !== "";
}

export const getPercentageOfClosedToDoList = (tempToDosList: ToDoObject[]): number=>{
    return (tempToDosList.filter(e => e.isOpen === 0).length/tempToDosList.length)*100;
}