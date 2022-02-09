import React, {useCallback} from "react";
import styles from './Up.module.css'
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Up = React.memo(() => {
    const scrollTo = useCallback(() => {
        const elem = document.getElementById('main')
        if (elem) {
            const yOffset = 85
            const y = elem.getBoundingClientRect().top - yOffset + window.pageYOffset
            window.scrollTo({top: y, behavior: 'smooth'})
        }
    }, [])
    return (
        <div className={styles.up} onClick={scrollTo}>
            <FontAwesomeIcon icon={faChevronUp} size='3x' className={styles.svg}/>
        </div>
    )
})