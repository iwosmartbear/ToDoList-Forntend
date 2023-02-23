import {ChangeEvent} from "react";

import './Input.css'

interface props {
    text: string;
    type: string;
    value: number | string;
    name: string;
    className: string;
    func?:(e: ChangeEvent<HTMLInputElement>)=> Promise<void> | void;
    disabled?: boolean;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
}
export function Input({type, text, value, name, className, disabled, func, min, max, minLength, maxLength}: props){

    return <label>{text}<br/>
        <input
            type={type}
            value={value}
            name={name}
            minLength={minLength || undefined}
            maxLength={maxLength || undefined}
            min={min || undefined}
            max={max || undefined}
            onChange={func || undefined}
            className={className}
            disabled={disabled}
        />
    </label>
}
