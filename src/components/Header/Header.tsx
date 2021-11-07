import React from "react";
import styles from './Header.module.css'
import {Nava} from "./Nava/Nava";

export const Header = React.memo(() => {
        return (
            <div className={styles.header}>
                <Nava/>
            </div>
        )
    }
)
