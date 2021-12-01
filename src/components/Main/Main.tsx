import React from "react";
import styles from './Main.module.css'
import commonStyles from './../../common/styles/CommonStyles.module.css'
import {ChangableSpan} from "./ChangableSpan/ChangableSpan";

export const Main = React.memo(() => {
        console.log('from main')

        return (
            <div id={'main'} className={styles.main}>
                <div className={commonStyles.container}>
                    <div className={styles.greeting}>
                        <span>Hi There!</span>
                        <h1>I am Alexandr Basalov</h1>
                        <p>
                            {
                                <ChangableSpan/>
                            }
                            <span className={styles.keyboardSpan}>|</span>
                            <span> developer.</span></p>
                    </div>
                    <div className={styles.photo}>Photo</div>
                </div>
            </div>
        )
    }
)

