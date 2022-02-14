import React from "react";
import styles from './Project.module.scss'
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectPropsType = {
    title: string,
    style: { backgroundImage: string },
    link: string;
    tags: string[],
}
export const Project: React.FC<ProjectPropsType> = React.memo((props) => {

    return (
        <div className={styles.project}>
            <div className={styles.screen} style={props.style}>{''}</div>
            <div className={styles.cover}>
                <div className={styles.projectInfo}>
                    <h3>{props.title}</h3>
                    <p>
                        {
                            props.tags.map((tag: string, id: number) => {
                                return <span key={id}>{tag + ' '}</span>
                            })
                        }
                    </p>
                    <a href={props.link}><h4>{'View '}
                        <FontAwesomeIcon icon={faEye}/></h4></a>
                </div>
            </div>
        </div>
    )
})