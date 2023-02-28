import React from "react";
import {NavLinkItem} from "../NavLinkItem/NavLinkItem";

import './Navigation.css'

export const Navigation = ()=>{



    return <div className="nav">
        <NavLinkItem to={"/"} className="mainNav" text="Home" />
        <NavLinkItem to={"/calendar"} className="mainNav" text="CalendarView" />
    </div>

}