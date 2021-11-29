import React, {useEffect, useState} from "react";
import styles from './Main.module.css'
import commonStyles from './../../common/styles/CommonStyles.module.css'

export const Main = React.memo(() => {
        console.log('from main')
        const spans = ['F', 'Fr', 'Fro', 'Fron', 'Front', 'Fronte', 'Fronten', 'Frontend', 'Frontend ', 'Frontend d',
            'Frontend de', 'Frontend dev', 'Frontend deve', 'Frontend devel', "Frontend develo", "Frontend develop", "Frontend develope",
            'Frontend developer', 'Frontend developer', 'Frontend developer', 'Frontend developer',]
        const [typed, setTyped] = useState(spans[0])
        const [count, setCount] = useState(0)

        useEffect(() => {
            const setTimeoutId = setTimeout(() => {
                setCount((count + 1) % spans.length)
                setTyped(spans[count])
            }, 100)

            return () => {
                clearTimeout(setTimeoutId)
            }
        }, [count])

        return (
            <div id={'main'} className={styles.main}>
                <div className={commonStyles.container}>
                    <div className={styles.greeting}>
                        <span>Hi There!</span>
                        <h1>I am Alexandr Basalov</h1>
                        <p id={'typed'}>{typed}</p>
                    </div>
                    <div className={styles.photo}>Photo</div>
                </div>
            </div>
        )
    }
)
