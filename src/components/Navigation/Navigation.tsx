import React from "react";
import {NavLinkItem} from "../NavLinkItem/NavLinkItem";

export const Navigation = ()=>{



    return <div className="nav">
        <NavLinkItem to={"/all"} className="mainNav" text="Home" />
        <NavLinkItem to={"/calendar"} className="mainNav" text="Calendar" />
    </div>

}