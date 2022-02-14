import React, {useCallback} from "react";
import styles from './Nava.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {stateType} from "../../../redux/store";
import {anchorType} from "../../../redux/reducer";

export const Nava = React.memo(() => {
        const currentAnchor = useSelector<stateType, anchorType>(state => state.state.currentAnchor)

        const linkStyle = useCallback((elementId: string) => {
            return `${styles.link} ${currentAnchor === elementId ? styles.active : ''}`
        }, [currentAnchor])
        const divStyle = useCallback((elementId: string) => {
            return `${styles.underMenu} ${currentAnchor === elementId ? styles.underActive : ''}`
        }, [currentAnchor])
        const scrollTo = useCallback((elementId: string) => {
            const elem = document.getElementById(elementId)
            if (elem) {
                const yOffset = 85
                const y = elem.getBoundingClientRect().top - yOffset + window.pageYOffset
                window.scrollTo({top: y, behavior: 'smooth'})
            }
        }, [])
        return (
            <div className={styles.nava}>
                <div className={styles.linkContainer}>
                    <NavLink className={() => linkStyle('main')}
                             onClick={() => scrollTo('main')}
                             to={'#main'}>Common</NavLink>
                    <div className={divStyle('main')}>{''}</div>
                </div>
                <div className={styles.linkContainer}>
                    <NavLink className={() => linkStyle('projects')}
                             onClick={() => scrollTo('projects')}
                             to={'#projects'}>Projects</NavLink>
                    <div className={divStyle('projects')}>{''}</div>
                </div>
                <div className={styles.linkContainer}>
                    <NavLink className={() => linkStyle('skills')}
                             onClick={() => scrollTo('skills')}
                             to={'#skills'}>Skills</NavLink>
                    <div className={divStyle('skills')}>{''}</div>
                </div>
                <div className={styles.linkContainer}>
                    <NavLink className={() => linkStyle('contacts')}
                             onClick={() => scrollTo('contacts')}
                             to={'#contacts'}>Contacts</NavLink>
                    <div className={divStyle('contacts')}>{''}</div>
                </div>
            </div>
        )
    }
)