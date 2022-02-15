import React, {MouseEvent, useCallback, useMemo, useState} from "react";
import commonStyles from '../../common/styles/CommonStyles.module.scss'
import styles from './Contacts.module.scss'
import {useFormik} from "formik";
import {ErrorMsg} from "./ErrorMsg/ErrorMsg";

type loginParamsType = {
    email: string,
    name: string,
    subject: string,
    message: string,
}
type FormikErrorType = Partial<loginParamsType>

export const Contacts = React.memo(() => {
    //error msg
    const [errorShow, setErrorShow] = useState({isHide: true, position: {screenX: 0, screenY: 0}, error: ''})
    const onFocusStyle = useMemo(() => {
        return {
            color: '#f07f81',
            position: 'absolute',
            top: '-8px',
            left: '8px',
            backgroundColor: '#252b2f',
            padding: '0 5px',
        }
    }, [])
    const calculateDivStyle = useCallback((value: string) => {
        return (
            value ?
                {
                    backgroundColor: '#f07f81',
                    width: '100%'
                } :
                {}
        )
    }, [])
    const calculateTextStyle = useCallback((value: string) => {
        return (
            value ?
                onFocusStyle :
                {}
        )
    }, [onFocusStyle])
    const contactForm = useFormik(
        {
            initialValues: {
                email: '',
                name: '',
                subject: '',
                message: '',
            } as loginParamsType,
            validate: (values) => {
                const errors: FormikErrorType = {};
                if (!values.email) {
                    errors.email = 'Email is required field';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.name) {
                    errors.name = 'Name is required field'
                }
                if (!values.message) {
                    errors.message = 'Message is required field'
                }
                return errors;
            },
            onSubmit: (values: loginParamsType) => {
                console.log(values)
                contactForm.resetForm()
            },
        },
    )
    const onMouseIn = (e: MouseEvent<HTMLInputElement>) => {
        if (contactForm.touched.name && contactForm.errors.name) {
            setErrorShow({
                isHide: false,
                position: {screenX: e.screenX, screenY: e.screenY},
                error: contactForm.errors.name
            })
            return
        } else if (contactForm.touched.email && contactForm.errors.email) {
            setErrorShow({
                isHide: false,
                position: {screenX: e.screenX, screenY: e.screenY},
                error: contactForm.errors.email
            })
            return
        } else if (contactForm.touched.message && contactForm.errors.message) {
            setErrorShow({
                isHide: false,
                position: {screenX: e.screenX, screenY: e.screenY},
                error: contactForm.errors.message
            })
            return
        } else if (!contactForm.values.name || !contactForm.values.email || !contactForm.values.message) {
            setErrorShow({
                isHide: false,
                position: {screenX: e.screenX, screenY: e.screenY},
                error: 'Fill required fields!'
            })
            return
        }
    }
    const onMouseOut = () => {
        if (!errorShow.isHide) setErrorShow({...errorShow, isHide: true})
    }

    return (
        <div id={'contacts'} className={styles.wrapper}>
            <div className={`${commonStyles.container} ${styles.container}`}>
                <h2 className={commonStyles.title}>
                    <span className={commonStyles.upperThenHeader}>GET IN TOUCH</span>
                    CONTACTS
                </h2>
                <form className={styles.inputsContainer} onSubmit={contactForm.handleSubmit}>
                    <div className={styles.inputs}>
                        <div className={styles.fieldContainer}>
                            <input className={styles.field + ' ' + styles.name}
                                   {...contactForm.getFieldProps('name')}
                                   onBlur={contactForm.handleBlur}
                            />
                            <div className={styles.underField}
                                 style={calculateDivStyle(contactForm.values.name)}>{''}</div>
                            <div className={styles.nameText}
                                 style={calculateTextStyle(contactForm.values.name)}>Name
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <input className={styles.field + ' ' + styles.email}
                                   {...contactForm.getFieldProps('email')}
                                   onBlur={contactForm.handleBlur}/>
                            <div className={styles.underField}
                                 style={calculateDivStyle(contactForm.values.email)}>{''}</div>
                            <div className={styles.nameText}
                                 style={calculateTextStyle(contactForm.values.email)}>Email
                            </div>
                        </div>
                        <div className={styles.fieldContainer + ' ' + styles.subject}>
                            <input className={styles.field + ' ' + styles.subject}
                                   {...contactForm.getFieldProps('subject')}
                                   onBlur={contactForm.handleBlur}/>
                            <div className={styles.underField}
                                 style={calculateDivStyle(contactForm.values.subject)}>{''}</div>
                            <div className={styles.nameText}
                                 style={calculateTextStyle(contactForm.values.subject)}>Subject
                            </div>
                        </div>
                        <div className={styles.fieldContainer + ' ' + styles.message}>
                        <textarea className={styles.field + ' ' + styles.message}
                                  {...contactForm.getFieldProps('message')}
                                  onBlur={contactForm.handleBlur}/>
                            <div className={styles.underField}
                                 style={calculateDivStyle(contactForm.values.message)}>{''}</div>
                            <div className={styles.nameText}
                                 style={calculateTextStyle(contactForm.values.message)}>Message
                            </div>
                        </div>
                        <div className={styles.submit}>
                            <input id={'button'} className={styles.submitBtn}
                                   type={'submit'}
                                   value={'Send Message'}
                                   onMouseEnter={onMouseIn}
                                   onMouseLeave={onMouseOut}
                            />
                            {!errorShow.isHide && <ErrorMsg {...errorShow}/>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
})

