import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header/Header";
import {ToDoDTO, ToDoObject} from "./types/fetchTypes";
import {fetchToAPI} from "./utils/functions";

import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainView} from "./components/MainView/MainView";
import {Calendar} from "./components/Calendar/Calendar";

function App() {
    const [listOfToDos, setListOfToDos]= useState<Promise<ToDoObject>| Promise<ToDoObject[]> | ToDoObject[] | ToDoObject>([]);

    useEffect(()=>{
        const doFetch = async ()=>{
            try {
                const data = await fetchToAPI("GET", '/all') as ToDoObject[];
                return data;
            } catch (e){
                throw new Error('Messed Up')
            }
        }
        doFetch().then(data=>setListOfToDos(data));
    }, []);


  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/all' element={<MainView listOfToDos={listOfToDos as ToDoDTO[]}/>}/>
            <Route path='/calendar' element={<Calendar listOfToDos={listOfToDos as ToDoDTO[]}/>}/>
        </Routes>


    </div>
  );
}




export default App;
