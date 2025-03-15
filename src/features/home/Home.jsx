import AlumniRegister from './containers/alumin-register/AlumniRegister'
import Company from './containers/company/Company'
import Contribute from './containers/contribute/Contribute'
import Hero from './containers/hero/Hero'
import SocietyInitiatives from './containers/society-initiatives/SocietyInitiatives'
import OurLeaders from './containers/our-leaders/OurLeaders'
import OurTeam from '../../components/our-team/OurTeam'
import WhyUs from './containers/why-us/WhyUs'
import Navbar from '@/components/landing/Navbar'
import ScrollToTopButton from '@/components/moveToTop/Movetop' // Import the ScrollToTopButton

const Home = () => {
  return (
    <div>
      <Navbar navItems={['ABOUT', 'REGISTER']} />
      <Hero />
      <Company />
      <WhyUs />
      <OurTeam />
      <SocietyInitiatives />
      <Contribute />
      <OurLeaders />
      <AlumniRegister />
      <ScrollToTopButton />
    </div>
  )
}

export default Home
