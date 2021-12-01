import React from "react";
import commonStyles from './../../common/styles/CommonStyles.module.css'
import styles from './Contacts.module.css'

export const Contacts = React.memo(() => {
    return (
        <div id={'contacts'} className={styles.wrapper}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h3 className={styles.title}>Contacts</h3>
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
    )
})