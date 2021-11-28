import React from "react";
import commonStyles from './../../common/styles/CommonStyles.module.css'
import styles from './Contacts.module.css'

export const Contacts = React.memo(() => {
    return (
        <div className={styles.wrapper}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h3 className={styles.title}>Contacts</h3>
                <form className={styles.inputsContainer}>
                    <div className={styles.inputs}>
                        <div>
                        <input value={'some text'}/>
                        </div>
                        <div>
                        <input value={'some text'}/>
                        </div>
                        <div  className={styles.textareaDiv}>
                            <textarea className={styles.textarea}>some text</textarea>
                        </div>
                    </div>
                    <div>
                        <input type={'submit'} value={'submit'}/>
                    </div>
                </form>
            </div>
</div>
)
})