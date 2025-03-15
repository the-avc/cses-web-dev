import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import styles from "./Login.module.scss"; 
import backgroundImage from "../../../public/institute.png";
import { GoArrowRight } from "react-icons/go";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
const Login = () => {
    // Background styles
    const backgroundStyles = {
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

    const [showPassword, setShowPassword] = useState(false);
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isLight, setIsLight] = useLocalStorage("isLight", preference);

    return (
        <>
            {/* Background Image */}
            <div className={styles.page} style={backgroundStyles}></div>

            {/* Login Container */}
            <div className={styles.container} data-theme={isLight ? "dark" : "light"}>
                <div className={styles.login}>
                    <h1 className={styles.login__title}>Welcome back</h1>
                    <div className={styles.line}></div>
                    <div className={styles.login__part}>
                        <h1 className={styles.login__line}>Please enter your details.</h1>
                    </div>
                    <div className={styles.login__form}>
                        <form>
                            {/* Username Input */}
                            <div className={styles.login__input}>
                                <input 
                                    type="text" 
                                    className={styles.login__inputField} 
                                    placeholder=" " 
                                    autoComplete="off" 
                                    spellCheck="false" 
                                />
                                <label className={styles.login__label}>Username</label>
                            </div>

                            {/* Password Input */}
                            <div className={styles.login__input}>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className={styles.login__inputField} 
                                    placeholder=" " 
                                    id="password" 
                                />
                                <label className={styles.login__label}>Password</label>
                                {showPassword ? (
                                    <FiEye className={styles.eyePassword} onClick={() => setShowPassword(false)} />
                                ) : (
                                    <FiEyeOff className={styles.eyePassword} onClick={() => setShowPassword(true)} />
                                )}
                            </div>

                            {/* Sign-In Button */}
                            <div className={styles.button}>
                                <button className={styles.login__button}>
                                    <div className={styles.loginText}>
                                        <h1 className={styles.signinText}>Sign In</h1>
                                    </div>
                                    <GoArrowRight className={styles.rightArrow} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Register Link */}
                    <div className={styles.register}>
                        <h1 className={styles.register_here}>
                            Don’t have an account? <Link to="/register" className={styles.anchor} href="#">Register here</Link>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
