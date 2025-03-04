import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar.jsx'
import RightSection from './right-section/RightSection.jsx'
import { useUser } from '@/provider/userProvider.jsx'
import axiosInstance from '@/api/axiosInstance.js'

import './Home.scss'
import useAuth from '@/hooks/useAuth.js'

import FooterSP from './footerSP/footerSP.jsx'
import Navbar from './Navbar/Navbar.jsx'
import HomeTab from './HomeTab/homeTab.jsx'
import PaymentTab from './PaymentTab/paymentTab.jsx'
import EventsTab from './EventsTab/EventsTab.jsx'
import StudentPortal from '@/pages/Student-portal-page/StudentPortal.jsx'
import ChangePassword from './change-password/ChangePassword.jsx'

const Home = () => {
   const { updateUser } = useUser()
   const { token } = useAuth()

   useEffect(() => {
      getUser().catch(console.error);
   }, [token])

   const getUser = async () => {
      const { data: { user } } = await axiosInstance.get('users')
      console.log(user)
      updateUser(user)
   }

   const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

   const openSideMenu = () => {
      setIsSideMenuOpen(true)
   }

   const closeSideMenu = () => {
      setIsSideMenuOpen(false)
   }

   useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 768px)')
      const handleMediaQueryChange = () => {
         if (mediaQuery.matches) openSideMenu()
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      handleMediaQueryChange()
      return () => {
         mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
   }, [])

   return (
      <div className="root">
         {/* <div className="container"> */}
         {/* <Sidebar
               closeSideMenu={closeSideMenu}
               isSideMenuOpen={isSideMenuOpen}
            /> */}



            {/* <StudentPortal/> */}

         <div className="main-content">
            {/* OLD CODE */}{/* <RightSection {...{ openSideMenu }} /> */}
            <Navbar />
            <main>
               {/* OLD CODE */}{/* {token ? <Outlet /> : <Navigate to="/login" />} */}
               <HomeTab />
               <EventsTab />
               <PaymentTab />
               <ChangePassword />
            </main>
            <FooterSP />
         </div>



         {/* </div> */}

         {/* <div className="footer">
            <p>
               © 2024, Made with{' '}
               <span className="MuiBox-root css-i6sm3l">❤️</span> by{' '}
               <a target="_blank" href="https://www.iitism.ac.in">
                  WebCSE Team , IIT(ISM)
               </a>
            </p>
         </div> */}
      </div>
   )
}

export default Home
