import React, {useCallback, useMemo} from "react";
import commonStyles from '../../common/styles/CommonStyles.module.scss'
import styles from './Contacts.module.css'
import {useFormik} from "formik";

type loginParamsType = {
    email: string,
    name: string,
    subject: string,
    message: string,
}

type FormikErrorType = Partial<loginParamsType>
export const Contacts = React.memo(() => {
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
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.name) {
                    errors.name = 'Required'
                }
                if (!values.message) {
                    errors.subject = 'Required'
                }
                return errors;
            },
            onSubmit: (values: loginParamsType) => {
                console.log(values)
                contactForm.resetForm()
            },
        },
    )
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
                                 style={calculateTextStyle(contactForm.values.email)}>Email</div>
                        </div>
                        <div className={styles.fieldContainer + ' ' + styles.subject}>
                            <input className={styles.field + ' ' + styles.subject}
                                   {...contactForm.getFieldProps('subject')}
                                   onBlur={contactForm.handleBlur}/>
                            <div className={styles.underField}
                                 style={calculateDivStyle(contactForm.values.subject)}>{''}</div>
                            <div className={styles.nameText}
                                 style={calculateTextStyle(contactForm.values.subject)}>Subject</div>
                        </div>
                        <div className={styles.fieldContainer + ' ' + styles.message}>
                        <textarea className={styles.field + ' ' + styles.message}
                                  {...contactForm.getFieldProps('message')}
                                  onBlur={contactForm.handleBlur}/>
                            <div className={styles.underField}
                                 style={calculateDivStyle(contactForm.values.message)}>{''}</div>
                            <div className={styles.nameText}
                                 style={calculateTextStyle(contactForm.values.message)}>Message</div>
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