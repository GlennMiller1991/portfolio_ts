import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {RemoteJob} from "./components/RemoteJob/RemoteJob";
import {Contacts} from "./components/Contacts/Contacts";
import {Up} from "./components/Up/Up";
import {Footer} from "./components/Footer/Footer";
import {anchorType, checkAnchorTC} from "./redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "./redux/store";

function App() {
    const currentAnchor = useSelector<stateType, anchorType>(state => state.state.currentAnchor)
    const dispatch = useDispatch()
    const [scrollY, setScrollY] = useState(0)
    const [elements, setElements] = useState<HTMLDivElement[]>([])
    const anchorsId: anchorType[] = useMemo(() => {
        return ['main', 'skills', "contacts", "projects"]
    }, [])
    const [showUp, setShowUp] = useState(false)
    const onScrollWindow = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

    //on scrolling execute
    useEffect(() => {
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
        dispatch(checkAnchorTC(elements, currentAnchor))
    }, [scrollY, showUp])

    //get elements and add event listener
    useEffect(() => {
        document.title = 'React developer'
        const elements = []
        for (let i = 0; i < anchorsId.length; i++) {
            const elem = document.getElementById(anchorsId[i])
            if (elem) {
                elements.push(elem)
            }
        }
        window.addEventListener('scroll', onScrollWindow)
        setElements(elements as HTMLDivElement[])
        return () => {
            window.removeEventListener('scroll', onScrollWindow)
        }
    }, [])

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<RemoteJob/>*/}
            <Contacts/>
            <Footer/>
            {
                showUp && <Up/>
            }
        </div>
    );
}

export default App;


