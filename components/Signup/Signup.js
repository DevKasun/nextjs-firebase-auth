import React, { useRef } from 'react';
import Card from '../Card/Card';
import styles from './Signup.module.scss';
import { useAuth } from './../../context/AuthContext';

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth;

    function handleSubmit(e) {
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <Card>
            <form className={styles.signupForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" ref={emailRef} required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input type="password" ref={passwordRef} required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Confirm Password</label>
                    <input type="password" ref={confirmPasswordRef} required />
                </div>

                <button type="submit">Sign Up</button>
            </form >
        </Card >
    )
}

export default Signup;