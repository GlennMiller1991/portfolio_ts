import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Skill.module.css'

type SkillPropsType = {
    title: string,
    icon: any,
    description: string,
}
export const Skill: React.FC<SkillPropsType> = React.memo((props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
})