import React from "react";
import styles from "./Socnet.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SocnetPropsType = {
    icon: any,
}
export const Socnet: React.FC<SocnetPropsType> = React.memo((props) => {
    return (
        <div className={styles.icon}>
            <FontAwesomeIcon icon={props.icon} size={'xs'}/>
        </div>
    )
})