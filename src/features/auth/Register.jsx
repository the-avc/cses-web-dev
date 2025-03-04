import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axiosInstance from '@/api/axiosInstance'
import Loader from '../../components/loader/Loader'
import { useAlert } from '@/hooks/use-alert'

const Register = () => {
    const { AlertBox, showAlert } = useAlert()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)
        const { data } = await axiosInstance.post("/auth/register", { ...(Object.fromEntries(formData)) })
        if (data.success) {
            showAlert(data.message, 'success');
        }
        else {
            showAlert(data.message, 'error')
        }
        setLoading(false)

    }

    return (
        <>
            <AlertBox />
            <Loader loading={loading} />
            <h1>Register</h1>
            <form className="form-input" onSubmit={handleSubmit}>
                <label htmlFor='username' className="username-label">
                    Username
                    <span className="info-icon" aria-label="For STUDENT and ALUMNI, the username is your admission number. For ADMIN, it is your employee ID." role="tooltip">
                        ℹ️
                        <span className="tooltip">
                            For STUDENT and ALUMNI,<br /> your username is your admission number.<br />
                            For ADMIN, it is your employee ID.
                        </span>
                    </span>
                </label>
                <input type='text' name='username' required />
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' required />
                <label htmlFor='userType'>User Type</label>
                <select name='userType' required>
                    <option value='STUDENT'>STUDENT</option>
                    <option value='ALUMNI'>ALUMNI</option>
                    <option value='ADMIN'>ADMIN</option>
                </select>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' required />
                <input type="submit" value="Register" />
            </form>
            <div className="auth-links">
                <p>Already have an account? </p>
                <Link to="/login">Login</Link>
            </div>
        </>
    )
}

export default Register
