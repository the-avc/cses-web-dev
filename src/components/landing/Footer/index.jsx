import styles from "./Footer.module.scss"
import MailIcon from "./mail.svg"
import CallIcon from "./call.svg"
import LocationIcon from "./location.svg"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div onClick={handleClick} className={styles.left}>
          <img
            src={"logo/cses-light.png"}
            alt='CSE Society Logo'
            className={styles.logo}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <p className='info-dept'>
              Department of Computer Science and Engineering,
            </p>
            <p>
              Indian Institute of Technology (Indian School of Mines), Dhanbad
            </p>
            <div className={styles.contact}>
              <div className={styles["contact-left"]}>
                <p>
                  <img src={MailIcon} alt='Email' className={styles.icon} />
                  <a href='mailto:cses@iitism.ac.in' className={styles.email}>
                    cses@iitism.ac.in
                  </a>
                </p>
                <p>
                  <img src={CallIcon} alt='Phone' className={styles.icon} />
                  03262235273
                </p>
              </div>
              <div
                className={`${styles["contact-right"]} ${styles.location}`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/TMbDnW3Yx4WFkfWA9",
                    "_blank"
                  )
                }}
              >
                <p>
                  <img
                    src={LocationIcon}
                    alt='Location'
                    className={styles.icon}
                  />
                  <span>Dhanbad - 826004, Jharkhand, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.copyright}>
        © Department of CSE, IIT ISM Dhanbad
      </div>
    </footer>
  )
}

export default Footer
