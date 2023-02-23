import './Button.css'
import { MouseEventHandler} from "react";

interface props {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    className: string;
    func?:MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export function Button({text, type, className, disabled, func}: props){

    return <button
        onClick={func || undefined}
        className={className}
        disabled={disabled}
        type={type}
    >{text}</button>
}
