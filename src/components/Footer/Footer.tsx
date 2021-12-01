import React from "react";
import styles from './Footer.module.css'
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import commonStyles from "../../common/styles/CommonStyles.module.css";
import {Socnet} from "./Socnet/Socnet";

export const Footer = React.memo(() => {
    return (
        <div className={styles.footer}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={styles.title}>Alexandr Basalov</h2>
                <div className={styles.socnetsContainer}>
                    <Socnet icon={faJs}/>
                    <Socnet icon={faJs}/>
                        <Socnet icon={faJs}/>
                    <Socnet icon={faJs}/>
                </div>
                <div className={styles.copyright}>
                <span>
                    All rights are reserved
                </span>
                </div>
            </div>
        </div>
    )
})

