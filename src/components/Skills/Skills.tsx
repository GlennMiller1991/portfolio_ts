import React from "react";
import styles from './Skills.module.css'
import commonStyles from './../../common/styles/CommonStyles.module.css'
import {Skill} from "./Skill/Skill";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";

export const Skills = React.memo(() => {
    const fakeDescription = 'Dolores sit ipsum velit purus aliquet, massa fringilla leo the drana.'
    return (
        <div id={'skills'} className={styles.skills}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skillsContainer}>
                    <Skill title={'TypeScript'} icon={faJs} description={fakeDescription}/>
                    <Skill title={'TypeScript'} icon={faJs} description={fakeDescription}/>
                    <Skill title={'TypeScript'} icon={faJs} description={fakeDescription}/>
                    <Skill title={'TypeScript'} icon={faJs} description={fakeDescription}/>
                </div>
            </div>
        </div>
    )
})