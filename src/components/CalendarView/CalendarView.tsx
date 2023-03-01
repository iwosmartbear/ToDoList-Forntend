import React, {useContext, useEffect, useState} from "react";
import Calendar from "react-calendar";

import {ToDoObject} from "../../types/fetchTypes";
import {ToDoListContext} from "../../context/ToDoListContextProvider";
import {Messager} from "../Messager/Mesager";
import {changeDateFormat} from "../../utils/functions";

import './CalendarView.css';

export const CalendarView = () => {
    const {listOfToDos, isMessage, resetError} = useContext(ToDoListContext);
    const [showCalendar, setShowCalendar] = useState(false);
    const [value, onChange] = useState(new Date());
    const [showToDoListMessage, setShowToDoListMessage] = useState(false);
    const [tempToDosList, setTempToDosList] = useState(listOfToDos);

    useEffect(() => {
        if (listOfToDos) {
            setShowCalendar(true)
        }
        resetError();//@TODO check if this is needed
    }, [listOfToDos]);

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
            text={`${(tempToDosList as []).length === 0 ? "No ToDos this Day" : "Here's your list of ToDos for this day"}`}
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
                    text="Loading..."
                    isButton={false}
                    className="message__content"
                    message={["waiting for data"]}
                />}
            </div>
        }</div>
}