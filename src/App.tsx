import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {RemoteJob} from "./components/RemoteJob/RemoteJob";

function App() {
    useEffect(() => {
        document.title = 'React developer Portfolio'
    }, [])
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteJob/>
        </div>
    );
}

export default App;
