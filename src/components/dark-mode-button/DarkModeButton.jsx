import { useState, useEffect } from "react"
import "./DarkModeButton.scss"

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "true"
  )
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
    <>
      <div className='dark-mode2' onClick={toggleDarkMode}>
        <span
          className={`material-icons-sharp ${darkMode ? "" : "active"}`}
        ></span>
        <span
          className={`material-icons-sharp ${darkMode ? "active" : ""}`}
        ></span>
      </div>
    </>
  )
}
