import './Button.css'
import { MouseEventHandler} from "react";

interface Props {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    className: string;
    func?:MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export function Button({text, type, className, disabled, func}: Props){

    return <button
        onClick={func || undefined}
        className={className}
        disabled={disabled}
        type={type}
    >{text}</button>
}
