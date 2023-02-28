import './Mesager.css'
import {Button} from "../common/Button/Button";
import {MouseEventHandler} from "react";

interface Props {
    text?: string;
    type?: "button" | "submit" | "reset" | undefined;
    className: string;
    message?: string;
    func?:MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isButton: boolean;
    isInMiddle?: boolean;
}
export const Messager = ({text, isButton, type, func, isInMiddle, message}: Props) => {


    return (
        <div className={`messager${isInMiddle ? " isInMiddle" : ""}`}>
            <div className={`message__content`}>
                <h1>{text}</h1>
                {message && <p>Message: {message}</p>}
            </div>
            {isButton && <Button text='Stuff' type={type} className="message__button" func={func}/>}
        </div>
    )
}