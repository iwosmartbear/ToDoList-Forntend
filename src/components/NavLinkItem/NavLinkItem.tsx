import {NavLink} from "react-router-dom";
import './NavLinkItem.css'

interface props {
    to: string;
    className: string;
    text: string;
}
export const NavLinkItem=({to, className, text}:props)=>{

    return <NavLink
            to={to}
            className={className}
        >{text}</NavLink>
}