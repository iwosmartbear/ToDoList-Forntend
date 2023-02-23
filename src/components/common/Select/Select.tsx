import {ChangeEvent} from "react";

import './Select.css';

interface props {
    text: string;
    className: string;
    func?: (e: ChangeEvent<HTMLSelectElement>) => Promise<void> | void;
    options: string[];
}

export const MySelect = ({text, className, options, func}: props) => {

    return <label className={className}>{text}<br/>
        <select
            onChange={func || undefined}
        >
            {options.map((el, ind) => <option key={ind}>{el}</option>)}
        </select>
    </label>
}