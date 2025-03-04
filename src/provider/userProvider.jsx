import { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
   const [userData, setUserData] = useState({})
   const updateUser = (user) => setUserData({ ...userData, ...user })

   return (
      <UserContext.Provider value={{ userData, updateUser }}>
         {children}
      </UserContext.Provider>
   )
}

export const useUser = () => useContext(UserContext)
