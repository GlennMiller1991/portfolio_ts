import React from "react";
import styles from './Main.module.css'
import commonStyles from './../../common/styles/CommonStyles.module.css'

export const Main = React.memo(() => {
        return (
            <div className={styles.main}>
                <div className={commonStyles.container}>
                    <div className={styles.greeting}>
                        <span>Hi There!</span>
                        <h1>I am Alexandr Basalov</h1>
                        <p>Frontend developer</p>
                    </div>
                    <div className={styles.photo}></div>
                </div>
            </div>
        )
    }
)
