import React from "react";
import styles from './RemoteJob.module.css'
import commonStyles from '../../common/styles/CommonStyles.module.scss'

export const RemoteJob = React.memo(() => {
    return (
        <div id={'remote'} className={`${commonStyles.container} ${styles.container}`}>
            <h2 className={commonStyles.title}>
                <span className={commonStyles.upperThenHeader}>REMOTE</span>
                REMOTE JOB?</h2>
            <span className={styles.answer}>Agree</span>
        </div>
    )
})