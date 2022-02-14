import React from "react";
import styles from './Project.module.scss'
import {faHandPointer} from "@fortawesome/free-solid-svg-icons/faHandPointer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ProjectPropsType = {
    title: string,
    style: { backgroundImage: string },
    link: string;
}
export const Project: React.FC<ProjectPropsType> = React.memo((props) => {
    const onClickHandler = () => {
        window.location.href = props.link
    }
    return (
            <div className={styles.project}>
                <div className={styles.screen} style={props.style} onClick={onClickHandler}>
                    <FontAwesomeIcon icon={faHandPointer}/>
                </div>
                <h3>{props.title}</h3>
            </div>
    )
})