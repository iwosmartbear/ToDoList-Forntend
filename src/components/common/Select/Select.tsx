import {ChangeEvent} from "react";

import './Select.css';
import {stringToPriority} from "../../../utils/styleFunctions";

interface props {
    text: string;
    className: string;
    func?: (e: ChangeEvent<HTMLSelectElement>) => Promise<void> | void;
    funcTwo?: (e: ChangeEvent<HTMLSelectElement>) => Promise<void> | void;
    val?: number;
    options: string[];
    selectClass?: string;
}

export const MySelect = ({text, className, options, func, selectClass, funcTwo, val}: props) => {

    return <label className={`${className}__label`}>{text}
        <select
            className={selectClass}
            onChange={func || undefined}
            onBlur={funcTwo || undefined}
        >
            {options.map((el, ind) => <option
                key={ind}
                selected={val === stringToPriority(el)}
            >{el}</option>)}
        </select>
    </label>
}