import {MouseEventHandler} from "react";

import {Button} from "../common/Button/Button";
import {ToDoObject} from "../../types/fetchTypes";
import {ToDoInMessanger} from "../ToDoInMessanger/ToDoInMessanger";
import {MyProgressBar} from "../MyPreogressBar/MyProgressBar";
import {checkIfDataIsGoodToShowInMessager, getPercentageOfClosedToDoList} from "../../utils/messagerHelper";

import './Mesager.css'

interface Props {
    title?: string;
    type?: "button" | "submit" | "reset" | undefined;
    className: string;
    message?: string[];
    tempToDosList?: ToDoObject[];
    func?: MouseEventHandler<HTMLButtonElement>;
    funcTwo?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isButton: boolean;
    isInMiddle?: boolean;
}

export const Messager = ({title, isButton, type, func, isInMiddle, message, tempToDosList, funcTwo}: Props) => {


    return (
        <div className={`messager${isInMiddle ? " isInMiddle" : ""}`}>
            <div className={`message__content`}>
                <h1>{title}</h1>
                {checkIfDataIsGoodToShowInMessager(message as string[]) && <p>Message: {message}</p>}
                {checkIfDataIsGoodToShowInMessager(tempToDosList as ToDoObject[]) && <MyProgressBar
                    percentage={getPercentageOfClosedToDoList(tempToDosList as ToDoObject[])}
                />}
                {checkIfDataIsGoodToShowInMessager(tempToDosList as ToDoObject[]) && (tempToDosList as ToDoObject[]).map(el =>
                    <ToDoInMessanger key={el.extId}
                                     taskContent={el.taskContent}
                                     priority={el.priority}
                                     isOpen={el.isOpen}/>)}

            </div>
            {isButton && <Button
                text='Load Again'
                type={type}
                className="message__button"
                func={funcTwo}
            />}
            {isButton &&
                <Button
                    text={`${window.location.pathname === '/' ? 'To CalendarView' : 'To Home Page'}`}
                    type={type}
                    className="message__button"
                    func={func}
                />}
        </div>
    )
}