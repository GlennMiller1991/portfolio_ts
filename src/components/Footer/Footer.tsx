import React from "react";
import styles from './Footer.module.css'
import {faVk, faGit, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faAt, faMapMarked, faPhone} from "@fortawesome/free-solid-svg-icons";
import commonStyles from "../../common/styles/CommonStyles.module.css";
import {Socnet} from "./Socnet/Socnet";

export const Footer = React.memo(() => {
    return (
        <div className={styles.footer}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <div className={styles.socnetsContainer}>
                    <Socnet icon={faVk}/>
                    <Socnet icon={faGit}/>
                    <Socnet icon={faTelegram}/>
                    <Socnet icon={faAt}/>
                    <Socnet icon={faPhone}/>
                    <Socnet icon={faMapMarked}/>
                    <Socnet icon={faWhatsapp}/>
                </div>
                <p className={styles.copyright}>
                    2021© React Developer Resume. Developed and Designed by Alexandr Basalov
                </p>
            </div>
        </div>
    )
})

