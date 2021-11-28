import React from "react";
import styles from './Up.module.css'

export const Up = React.memo(() => {
    return (
        <div className={styles.up}>
            <a href={'#header'}>Up to Nava</a>
        </div>
    )
})