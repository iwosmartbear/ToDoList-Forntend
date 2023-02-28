import {ChangeEvent} from "react";

import './Input.css'

interface props {
    text?: string;
    type: string;
    value: number | string;
    name: string;
    className: string;
    func?: (e: ChangeEvent<HTMLInputElement>) => Promise<void> | void;
    funcTwo?: (e: ChangeEvent<HTMLInputElement>) => Promise<void> | void;
    disabled?: boolean;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
}

export function Input({type, text, value, name, className, disabled, func, min, max, minLength, maxLength, funcTwo}: props) {

    return <label className={`${className}__label`}>{text}
        <input
            type={type}
            value={value}
            name={name}
            minLength={minLength || undefined}
            maxLength={maxLength || undefined}
            min={min || undefined}
            max={max || undefined}
            onChange={func || undefined}
            onBlur={funcTwo || undefined}
            className={className}
            disabled={disabled}
        />
    </label>
}
