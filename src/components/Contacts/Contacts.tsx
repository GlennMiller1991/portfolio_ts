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
                <form className={styles.inputsContainer}>
                    <div className={styles.inputs}>
                        <div className={styles.fieldContainer}>
                            <input className={styles.field + ' ' + styles.name} placeholder={'Name'}/>
                            <div className={styles.underField}></div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <input className={styles.field + ' ' + styles.email} placeholder={'Email'}/>
                            <div className={styles.underField}></div>
                        </div>
                        <div className={styles.fieldContainer + ' ' + styles.subject}>
                            <input className={styles.field + ' ' + styles.subject} placeholder={'Subject'}/>
                            <div className={styles.underField}></div>
                        </div>
                        <div className={styles.fieldContainer + ' ' + styles.message}>
                        <textarea className={styles.field + ' ' + styles.message}
                                  placeholder={'Message'}/>
                            <div className={styles.underField}></div>
                        </div>
                        <div className={styles.submit}>
                            <input className={styles.submitBtn} type={'submit'} value={'Send Message'}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
})