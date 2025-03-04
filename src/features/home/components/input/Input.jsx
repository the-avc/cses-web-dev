import styles from "./Input.module.scss"

const InputField = (props) => {
  const { name, placeholder, type = "text", setFormdata, formData } = props
  return (
    <div className={styles.inputWrapper}>
      <input
        name={name}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        aria-label={placeholder}
        required
      />
    </div>
  )
}

export default InputField
