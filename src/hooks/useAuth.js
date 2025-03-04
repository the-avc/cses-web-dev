import { useMemo, useState, useEffect } from 'react'
import axiosInstance from '@/api/axiosInstance'

const useAuth = () => {
  const [token, setToken_] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    setToken_(newToken)
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      deleteToken()
    }
  }

  const deleteToken = () => {
    setToken_(null)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    // if (token) {
    //   axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    // } else {
    //   delete axiosInstance.defaults.headers.common['Authorization']
    // }
  }, [token])

  return useMemo(() => ({ token, setToken, deleteToken }), [token])
}

export default useAuth
