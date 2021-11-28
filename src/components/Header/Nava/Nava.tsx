import React from "react";
import styles from './Nava.module.css'

export const Nava = React.memo(() => {
        return (
            <div className={styles.nava}>
                <a href={'#main'}>COMMON</a>
                <a href={'#projects'}>PROJECTS</a>
                <a href={'#skills'}>SKILLS</a>
                <a href={'#contacts'}>CONTACTS</a>
            </div>
        )
    }
)