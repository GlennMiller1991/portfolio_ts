import React from "react";
import styles from './ErrorMsg.module.scss'

type ErrorMsgPropsType = {
    isHide: boolean,
    position: {
        screenX: number,
        screenY: number,
    },
    error: string,
}
export const ErrorMsg: React.FC<ErrorMsgPropsType> = React.memo((props) => {
    return (
        <div className={styles.wrapper}
             style={{
                 top: props.position.screenY,
                 left: props.position.screenX,
             }}>
            {
                props.error
            }
        </div>
    )
})