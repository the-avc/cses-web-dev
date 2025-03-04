import { useUser } from '@/provider/userProvider'
import Navbar from '../Navbar/Navbar'
// import Reminder from '../Reminder/Reminder'

import './RightSection.scss'

export default function RightSection({ openSideMenu }) {
   const { userData } = useUser()
   return (
      <>
         <div className="right-section">
            <Navbar openSideMenu={openSideMenu} />
            <div className="user-profile">
               <div className="profile-logo">
                  <img className="invert-logo" alt="logo" src="/logo/cses-dark.png" />
                  <h2>{userData.username || 'Loading...'}</h2>{' '}
                  <p>{userData.userType || 'Not Initialisd'}</p>{' '}
               </div>
            </div>
            {/* <Reminder /> */}
         </div>
      </>
   )
}