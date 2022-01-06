import React, {MouseEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {RemoteJob} from "./components/RemoteJob/RemoteJob";
import {Contacts} from "./components/Contacts/Contacts";
import {Up} from "./components/Up/Up";
import {Footer} from "./components/Footer/Footer";
import {Cursor, cursorDefaultData} from "./components/Cursor/Cursor";

function App() {
    console.log('from app')
    const [showUp, setShowUp] = useState(false)
    const [cursorPositon, setCursorPosition] = useState<number[]>([-100, -100])
    const onScrollWindow = useCallback(() => {
        const header = document.getElementById('header')
        if (header) {
            const currentY = document.documentElement.scrollTop
            const headerHeight = header.offsetHeight
            if (currentY <= headerHeight) {
                if (showUp) setShowUp(false)
            } else {
                if (!showUp) setShowUp(true)
            }
        }
    }, [showUp])
    const onMouseMoveHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
        setTimeout(() => {
            setCursorPosition([
                e.clientY - cursorDefaultData.cursorRadius,
                e.clientX - cursorDefaultData.cursorRadius
            ])
        }, 100)
    }, [])


    //title useEffect
    useEffect(() => {
        document.title = 'React developer'
    }, [])


    //scroll
    useEffect(() => {
        console.log('from scroll effect')
        window.addEventListener('scroll', onScrollWindow)

        return () => {
            window.removeEventListener('scroll', onScrollWindow)
        }
    }, [onScrollWindow])

    return (
        <div className="App" onScroll={onScrollWindow} onMouseMove={onMouseMoveHandler}>
            <Cursor top={cursorPositon[0]} left={cursorPositon[1]}/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteJob/>
            <Contacts/>
            <Footer/>
            {
                showUp && <Up/>
            }
        </div>
    );
}

export default App;


