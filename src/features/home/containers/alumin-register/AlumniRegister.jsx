import styles from './AlumniRegister.module.scss'
import InputField from '../../components/input/Input'
import { useAlert } from '../../../../hooks/use-alert'
import axiosInstance from '@/api/axiosInstance'

const AlumniRegister = () => {
  const { AlertBox, showAlert } = useAlert()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const body = Object.fromEntries(formData)
    const { data } = await axiosInstance.post("/auth/register", { ...body, userType: "ALUMNI" })
    if (data.success) {
      showAlert(data.message, 'success');
    }
    else {
      showAlert(data.message, 'error')
    }
  }

  return (
    <>
      <AlertBox />
      <section
        id='register'
        className={styles.container}
      >
        <img
          loading='lazy'
          src='/pink-black.png'
          className={styles.backgroundImage}
          alt=''
        />
        <div className={styles.contentWrapper}>
          <div className={styles.register}>
            <h1 className={styles.title}>Register now!</h1>
            <p>(Only for Alumni)</p>
          </div>
          <div className={styles.formWrapper}>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <InputField
                name='name'
                placeholder='Name'
                type='text'
              />
              <InputField
                name='username'
                placeholder='Admission Number'
                type='text'
              />
              <InputField
                name='graduationYear'
                placeholder='Graduation Year'
                type='number'
              />
              <InputField
                name='email'
                placeholder='Email'
                type='email'
              />
              <input
                type='submit'
                className={styles.registerButton}
                value='Submit'
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AlumniRegister
