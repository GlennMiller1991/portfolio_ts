import React, {useEffect, useState} from "react";
import styles from './Cursor.module.css'

export const a = 42
export const cursorDefaultData = {
    cursorRadius: 15,
    moveRadius: 20,
    transitionTime: 1000,
}
type CursorType = {
    top: number,
    left: number,
}

export const Cursor: React.FC<CursorType> = React.memo((props) => {
    console.log('from cursor')
    const [cursorPosition, setCursorPosition] = useState<number[]>([
        cursorDefaultData.moveRadius,
        cursorDefaultData.moveRadius,
    ])

    useEffect(() => {
        setTimeout(() => {
            setCursorPosition(
                [
                    Math.random() * (cursorDefaultData.moveRadius * 2) - cursorDefaultData.moveRadius,
                    Math.random() * (cursorDefaultData.moveRadius * 2) - cursorDefaultData.moveRadius,
                ]
            )
        }, 200)
    }, [cursorPosition])
    return (
        <div className={styles.cursor} style={{
            width: cursorDefaultData.cursorRadius * 2,
            height: cursorDefaultData.cursorRadius * 2,
            top: props.top,
            left: props.left,
            transform: `translate(${cursorPosition[0]}px, ${cursorPosition[1]}px)`,
        }}>
        </div>
    )
})