import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {MainView} from "./components/MainView/MainView";
import {CalendarView} from "./components/CalendarView/CalendarView";
import {ToDoListContextProvider} from "./context/ToDoListContextProvider";
import {withErrorBoundary} from "react-error-boundary";

import './App.css';

export function App() {


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

export default withErrorBoundary(App, {
    FallbackComponent: () => <span>Oh no :(</span>,
});

// export default App;
