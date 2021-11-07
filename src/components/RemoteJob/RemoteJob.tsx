import React from "react";
import styles from './RemoteJob.module.css'
import commonStyles from './../../common/styles/CommonStyles.module.css'

export const RemoteJob = React.memo(() => {
    return (
        <div className={`${commonStyles.container} ${styles.container}`}>
            <h4 className={styles.question}>Remote Job?</h4>
            <span className={styles.answer}>Agree</span>
        </div>
    )
})