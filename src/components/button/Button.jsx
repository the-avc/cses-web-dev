import styles from './Button.module.scss'

const Button = ({ text }) => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  const textId = text.replace(/\s+/g, '').toLowerCase()
  return (
    <div
      onClick={() => scrollToSection(`#${textId}`)}
      className={styles.headerButton}
    >
      {``} {text}
    </div>
  )
}

export default Button
