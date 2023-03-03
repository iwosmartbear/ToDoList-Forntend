import React, {useContext, useEffect, useState} from "react";
import Calendar from "react-calendar";

import {ToDoObject} from "../../types/fetchTypes";
import {Messager} from "../Messager/Mesager";
import {changeDateFormat} from "../../utils/functions";
import {ErrPretender} from "../../types/ToDoContextTypes";
import { ToDoListContext } from "../../context/ToDoListContextCreateContext";

import './CalendarView.css';

export const CalendarView = () => {
    const {listOfToDos, isMessage, resetError, setPretendErrorMessage} = useContext(ToDoListContext);
    const [showCalendar, setShowCalendar] = useState(false);
    const [value, onChange] = useState(new Date());
    const [showToDoListMessage, setShowToDoListMessage] = useState(false);
    const [tempToDosList, setTempToDosList] = useState(listOfToDos);

    useEffect(() => {
        const myTimeOut = setTimeout(()=>{
            setPretendErrorMessage({
                isMessage: true,
                message: "Sorry, it takes too long",
            } as ErrPretender)
        }, 2500)
        if (listOfToDos && (listOfToDos as ToDoObject[]).length > 0 ) {
            setShowCalendar(true);
            clearTimeout(myTimeOut);
        } else {
            setShowCalendar(false);
        }
        resetError();
        return ()=> clearTimeout(myTimeOut);
    }, [listOfToDos])

    function handleOnMouse(value: string) {
        setTempToDosList((listOfToDos as ToDoObject[]).filter((el) => {
            return el.dueDate === value
        }));
        setShowToDoListMessage(true);
    }

    function handleOfMouse() {
            setShowToDoListMessage(false);
    }

    return <div className="calendar">
        <h1>CalendarView</h1>
        {showToDoListMessage && <Messager
            title={`${(tempToDosList as []).length === 0 ? "No ToDos this Day" : "Here's your list of ToDos for this day"}`}
            isButton={false}
            className="message__content"
            message={[`${(tempToDosList as []).length === 0 ? "No ToDos this Day" : ""}`]}
            tempToDosList={tempToDosList as ToDoObject[]}
        />}
        {showCalendar ?
            <Calendar
                tileClassName="calendar-day"
                tileContent={
                    ({date, view}): JSX.Element | null => view === 'month' ?
                        <div className="div-in-button" onMouseEnter={() => {
                            handleOnMouse(changeDateFormat(date));
                        }}
                             onMouseOut={() => {
                                 handleOfMouse();
                             }}
                        >{date.toDateString()}</div> : null
                }
                value={value}
            /> :
            <div>
                {isMessage || <Messager
                    title="Loading..."
                    isButton={false}
                    className="message__content"
                    message={["waiting for data"]}
                />}
            </div>
        }</div>
}