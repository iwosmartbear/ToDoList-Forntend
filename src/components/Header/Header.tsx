import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Navigation} from "../Navigation/Navigation";

import {Form} from "../common/Form/Form";
import {Messager} from "../Messager/Mesager";
import {ToDoListContext} from "../../context/ToDoListContextProvider";

import './Header.css'

export const Header = () => {
    const {isMessage, message} = useContext(ToDoListContext);
    const navigate = useNavigate();

    function navigateTo(): void {
        navigate(`${window.location.pathname === '/' ? '/calendar' : '/'}`);
    }

    function reload(): void {
        window.location.reload();
    }
    return <div className="header">
        {isMessage && <Messager
            title="Loading..."
            isButton={true}
            type="button"
            className="message__content"
            isInMiddle={true}
            message={(message as string[])}
            func={navigateTo}
            funcTwo={reload}
        />}
        <Navigation/>
        <Form/>
    </div>

}
