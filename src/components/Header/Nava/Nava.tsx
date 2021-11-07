import React from "react";
import styles from './Nava.module.css'

export const Nava = React.memo(() => {
        return (
            <div className={styles.nava}>
                <a href={''}>COMMON</a>
                <a href={''}>PROJECTS</a>
                <a href={''}>SKILLS</a>
                <a href={''}>CONTACTS</a>
            </div>
        )
    }
)