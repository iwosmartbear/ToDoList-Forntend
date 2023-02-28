import {MouseEventHandler} from "react";

import {Button} from "../common/Button/Button";
import {ToDoObject} from "../../types/fetchTypes";

import './Mesager.css'

interface Props {
    text?: string;
    type?: "button" | "submit" | "reset" | undefined;
    className: string;
    message?: string[];
    tempToDosList?: ToDoObject[];
    func?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isButton: boolean;
    isInMiddle?: boolean;
}

export const Messager = ({text, isButton, type, func, isInMiddle, message, tempToDosList}: Props) => {


    return (
        <div className={`messager${isInMiddle ? " isInMiddle" : ""}`}>
            <div className={`message__content`}>
                <h1>{text}</h1>
                {message && (message as string[]).length !== 0 && message[0] !== "" && <p>Message: {message}</p>}

                {tempToDosList && (tempToDosList as ToDoObject[]).length !== 0 && tempToDosList.map(el => <p key={el.id}
                                                                                                             className={el.isOpen ? "" : " toDo__closed"}>{el.taskContent}</p>)}

            </div>
            {isButton && <Button text='Load Again' type={type} className="message__button" func={func}/>}
            {isButton &&
                <Button text={`${window.location.pathname === '/' ? 'To CalendarView' : 'To Home Page'}`} type={type}
                        className="message__button" func={func}/>}
        </div>
    )
}