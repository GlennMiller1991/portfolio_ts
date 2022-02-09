import React from "react";
import commonStyles from './../../common/styles/CommonStyles.module.css'
import styles from './Contacts.module.css'

export const Contacts = React.memo(() => {
    return (
        <div id={'contacts'} className={styles.wrapper}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={commonStyles.title}>
                    <span className={commonStyles.upperThenHeader}>GET IN TOUCH</span>
                    CONTACTS
                </h2>
                <div>
                    <form className={styles.inputsContainer}>
                        <div className={styles.inputs}>
                            <input defaultValue={'some text'}/>
                            <input defaultValue={'some text'}/>
                            <textarea className={styles.textarea}
                                      defaultValue={'some text'}/>
                        </div>
                        <div>
                            <input type={'submit'} value={'submit'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
})