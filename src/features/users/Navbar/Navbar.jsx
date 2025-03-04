import React, { useState, useEffect } from "react"
import { useUser } from "@/provider/userProvider"
import prof1 from "./images/profile.png"
import open from "./images/hamburger.png"
import styles from "./Navbar.module.scss"
import { stepLabelClasses } from "@mui/material"

import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") !== "false"
  )
  const { userData } = useUser()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("mode", newMode ? "true" : "false")
      return newMode
    })
  }
  return (
    <div className={styles['nav']}>
      <div className={styles['navLeft']}>
        <b>CSES</b> Student Portal
      </div>

      <div className={styles['navTabs']}>
        {/* 
        add "active" to current navigation tab 
        It can be done in the following way.
        className={`${styles['homeNav']} ${styles['active']}`}
      */}
      {/* "active" in className represents the active class and the styling is applied accordingly  */}
        <span className={`${styles['homeNav']} ${styles['active']}`}>
          <NavLink to="./">( HOME )</NavLink>
        </span>

        <span className={`${styles['eventsNav']}`}>
          <NavLink to='./EventsTab'>( EVENTS )</NavLink>
        </span>

        <span className={`${styles['paymentsNav']}`}>
          <NavLink to="./PaymentTab">( PAYMENTS )</NavLink>
        </span>
      </div>

      {/* <div className={styles['nav-right']}> */}
      {/* dark mode btn code start */}
      <div className={styles['dark-mode1']} onClick={toggleDarkMode}>
        <span
          className={`${styles['material-icons-sharp']} ${!darkMode && styles['active']}`}
        ></span>
        <span
          className={`${styles['material-icons-sharp']} ${darkMode && styles['active']}`}
        ></span>
      </div>
      {/* dark mode btn code end */}

      {/* <div className={styles['profile']}> */}
      <div className={`${styles['welcome']}`}>
        <span>Hi </span>
        {`FirstName`}
        {userData.name && (
          <p>{userData.name.split(" ")[0] || "Loading..."}</p>
        )}
      </div>
      {/* <small className={styles['text-muted']}>
            {userData.userType || "Not Initialized"}
          </small>{" "} */}
      {/* </div> */}
      {/* <img className={styles['profile-photo']} alt='profile-1' src={prof1} /> */}
      {/* </div> */}
    </div>
  )
}

export default Navbar
