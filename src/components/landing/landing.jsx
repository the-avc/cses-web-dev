import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Landing = () => {
  const { pathname } = useLocation()
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    if (pathname !== '/gallery') {
      setCurrentPath(pathname.substring(1))
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div style={{ backgroundColor: '#000' }}>
      <Outlet context={{ currentPath }} />
      <Footer />
    </div>
  )
}

export default Landing
