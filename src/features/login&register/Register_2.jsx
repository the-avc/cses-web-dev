import React from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import styles from "./Register_2.module.scss"; // Import SCSS module

const Register_2 = ({ step, setStep }) => {
  return (
    <div className={styles.step2}>
      <div className={styles.register__part}>
        <h1 className={styles.register__line}>This info will be linked to your profile.</h1>
      </div>
      <div className={styles.register__form}>
        <form>
          <div className={styles.register__input}>
            <input type="text" className={styles.register__inputField} placeholder=" " autoComplete='off' spellCheck='false' />
            <label className={styles.register__label}>Google Scholar Link (for professors)</label>
          </div>
          <div className={styles.register__input}>
            <input type="text" className={styles.register__inputField} placeholder=" " autoComplete='off' spellCheck='false' />
            <label className={styles.register__label}>GitHub Profile Link (for users)</label>
          </div>
          <div className={styles.register__input}>
            <input type="text" className={styles.register__inputField} placeholder=" " autoComplete='off' spellCheck='false' />
            <label className={styles.register__label}>etc</label>
          </div>
          <div className={styles.register__input}>
            <input type="text" className={styles.register__inputField} placeholder=" " autoComplete='off' spellCheck='false' />
            <label className={styles.register__label}>etc</label>
          </div>
          <div className={styles.button_2}>
            <button className={styles.register__button} type="button" onClick={() => setStep(1)}>
              <GoArrowLeft className={styles.rightArrow} />
              <div className={styles.registerText}>
                <h1 className={styles.signinText}>Previous</h1>
              </div>
            </button>
            <button className={styles.register__button} type="submit">
              <div className={styles.registerText}>
                <h1 className={styles.signinText}>Sign Up</h1>
              </div>
              <GoArrowRight className={styles.rightArrow} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register_2;
