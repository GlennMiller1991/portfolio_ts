import React from "react";

import styles from './Project.module.css'

type ProjectPropsType = {
    title: string,
    screen: any,
    description: string,
}
export const Project: React.FC<ProjectPropsType> = React.memo((props) => {
    return (
        <div className={styles.project}>
            <div className={styles.screen}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
})