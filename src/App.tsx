import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header/Header";
import {ToDoObject} from "./types/fetchTypes";
import {fetchToAPI} from "./utils/functions";

import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainView} from "./components/MainView/MainView";
import {Calendar} from "./components/Calendar/Calendar";
import {ToDoListContextProvider} from "./context/ToDoListContextProvider";

// export const ToDoListContext = createContext<ToDoObject | ToDoObject[] | Promise<ToDoObject> | Promise<ToDoObject[]>();

function App() {
    const [listOfToDos, setListOfToDos] = useState<Promise<ToDoObject> | Promise<ToDoObject[]> | ToDoObject[] | ToDoObject>([]);

    useEffect(() => {
        const doFetch = async () => {
            try {
                const data = await fetchToAPI("GET", '/all') as ToDoObject[];
                return data;
            } catch (e) {
                throw new Error('Messed Up')
            }
        }
        doFetch().then(data => setListOfToDos(data));
    }, [listOfToDos]);


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
