import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Link } from 'react-router-dom';
import styles from "./Register.module.scss";
import backgroundImage from "../../../public/institute.png";
import { GoArrowRight } from "react-icons/go";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Register_2 from './Register_2.jsx';

const Register = () => {
    const pageStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
    };

    const [showpassword, setShowpassword] = useState(false);
    const [step, setStep] = useState(1);
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isLight, setIsLight] = useLocalStorage('isLight', preference);
    const progressWidth = step === 1 ? "50%" : "100%";

    const handleChange = () => setShowpassword(prev => !prev);

    return (
        <>
            <div className={styles.page} style={pageStyles}></div>
            <div className={styles.container} data-theme={isLight ? "dark" : "light"}>
                <div className={styles.reg}>
                    <h1 className={styles.register__title}>Hello There!</h1>
                    <div className={styles.line_register}>
                        <div className={styles.progress} style={{ width: progressWidth }}></div>
                    </div>
                    {step === 1 ? (
                        <div className={styles.step1}>
                            <div className={styles.register__part}>
                                <h1 className={styles.register__line}>Please enter your details.</h1>
                            </div>
                            <div className={styles.register__form}>
                                <form>
                                    <div className={styles.register__input}>
                                        <input type="text" className={styles.register__inputField} placeholder=" " autoComplete="off" spellCheck="false" />
                                        <label className={styles.register__label}>Username</label>
                                    </div>
                                    <div className={styles.register__input}>
                                        <input type="text" className={styles.register__inputField} placeholder=" " autoComplete="off" spellCheck="false" />
                                        <label className={styles.register__label}>Name</label>
                                    </div>
                                    <div className={styles.register__input}>
                                        <select className={`${styles.register__inputField} ${styles.dropdown__select}`}>
                                            <option value="" disabled defaultValue>Select User Type</option>
                                            <option value="Admin">Admin</option>
                                            <option value="student">Student</option>
                                            <option value="alumni">Alumni</option>
                                        </select>
                                        <label className={styles.register__label}>User Type</label>
                                    </div>
                                    <div className={styles.register__input}>
                                        <input type={showpassword ? "text" : "password"} className={styles.register__inputField} placeholder=" " id="password" />
                                        <label className={styles.register__label}>Password</label>
                                        {showpassword ? (
                                            <FiEye className={styles.eye_password} onClick={handleChange} />
                                        ) : (
                                            <FiEyeOff className={styles.eye_password} onClick={handleChange} />
                                        )}
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.register__button} onClick={(e) => { e.preventDefault(); setStep(2); }}>
                                            <div className={styles.register_text}>
                                                <h1 className={styles.signin_text}>Next</h1>
                                            </div>
                                            <GoArrowRight className={styles.right_arrow} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <Register_2 step={step} setStep={setStep} />
                    )}
                    <div className={styles.register}>
                        <h1 className={styles.register_here}>Already have an account?  
                            <Link to="/login" className={styles.anchor}>Sign in</Link>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
