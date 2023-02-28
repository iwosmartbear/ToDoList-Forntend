import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {MainView} from "./components/MainView/MainView";
import {CalendarView} from "./components/CalendarView/CalendarView";
import {ToDoListContextProvider} from "./context/ToDoListContextProvider";

import './App.css';

function App() {


    return (
        <ToDoListContextProvider>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/' element={<MainView/>}/>
                    <Route path='/calendar' element={<CalendarView/>}/>
                </Routes>
            </div>
        </ToDoListContextProvider>

    );
}


export default App;
