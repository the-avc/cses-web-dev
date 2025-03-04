import { useState } from 'react'
import axiosInstance from '@/api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../../../provider/useAlert'
import Loader from '@/components/loader/Loader'
import Checkbox from '@/components/checkbox/Checkbox2'

import './ChangePassword.scss'

const ChangePassword = () => {
   const navigate = useNavigate()
   const { showAlert } = useAlert()
   const [loading, setLoading] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)

      if (data.newPassword !== data.confirmPassword) {
         showAlert("New and confirm password doesn't match", 'info')
         setLoading(false)
         return
      }
      if (data.newPassword === data.oldPassword) {
         showAlert('New and old password is same', 'info')
         setLoading(false)
         return
      }

      const res = await axiosInstance.patch('/auth/update-password', {
         newPassword: data.newPassword,
         oldPassword: data.oldPassword
      })

      if (res.data.success) {
         e.target.reset()
         navigate('/users/dashboard', { replace: true })
      } else {
         showAlert(res.data.message, 'error')
      }
      setLoading(false)
   }

   return (
      <div className='changePassword'>
         <Loader loading={loading} />
         <h1 className='ChangePassTitle'>Change Password</h1>
         <div className="recent-orders">
            {/* <h2>Change Your Password</h2> */}
            <div className="reminders box">
               <form className="form-input" onSubmit={handleSubmit}>
                  <label htmlFor='oldPassword'>Old Password</label>
                  <input type={showPassword ? 'text' : 'password'} name='oldPassword' required />
                  <label htmlFor='newPassword'>New Password</label>
                  <input type={showPassword ? 'text' : 'password'} name='newPassword' required />
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input type={showPassword ? 'text' : 'password'} name='confirmPassword' required />
                  <Checkbox name='Show Password' cur={showPassword} toggle={() => setShowPassword(!showPassword)} />
                  <input className='ChangePassSubmit' type="submit" value="Submit" />
               </form>
            </div>
         </div>

      </div>
   )
}

export default ChangePassword
