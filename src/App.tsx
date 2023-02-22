import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ToDoObject} from "./types/fetchTypes";
import {fetchToAPI} from "./utils/functions";

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
            {[listOfToDos].length === 0 ?
                <p>Nothing to show!</p> :
                <Header/>}

    </div>
  );
}




export default App;
