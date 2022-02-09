import React from "react";
import commonStyles from './../../common/styles/CommonStyles.module.css'
import styles from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = React.memo(() => {
    return (
        <div id={'projects'} className={styles.projects}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={commonStyles.title}>
                    <span className={commonStyles.upperThenHeader}>PROJECTS</span>
                    PROJECTS</h2>
                <div className={styles.projectsContainer}>
                    <Project title={'Social_network'} description={'soc net'} screen={null}/>
                    <Project title={'Social_network'} description={'soc net'} screen={null}/>
                </div>
            </div>
        </div>
    )
})