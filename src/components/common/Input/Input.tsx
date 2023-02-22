import {ChangeEvent, useEffect, useState} from "react";

interface props {
    text: string;
    type: string;
    value: number | string;
    name: string;
    className: string;
    func?:(e: ChangeEvent<HTMLInputElement>)=> Promise<void> | void;
    disabled?: boolean;
}
export function Input({type, text, value, name, className, disabled, func}: props){
    const [val, setValue] = useState("");
    useEffect(()=>{

    }, [])
    return <label>{text}<br/>
        <input
            type={type}
            value={value}
            name={name}
            onChange={func || undefined}
            className={className}
            disabled={disabled}
        />
    </label>
}
