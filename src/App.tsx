import React from 'react';
import {Header} from "./components/Header/Header";

import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainView} from "./components/MainView/MainView";
import {Calendar} from "./components/Calendar/Calendar";
import {ToDoListContextProvider} from "./context/ToDoListContextProvider";


function App() {


    return (
        <ToDoListContextProvider>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/' element={<MainView/>}/>
                    <Route path='/calendar' element={<Calendar/>}/>
                </Routes>
            </div>
        </ToDoListContextProvider>

    );
}


export default App;
