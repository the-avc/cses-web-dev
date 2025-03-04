import SocietyHeading from './Society/SocietyHeading'
import SocietyInfo from './Society/SocietyInfo'
import UpcomingEvents from './UpcomingEvents'
import Teams from '../../components/our-team/OurTeam'
import styles from './Society.module.scss'
import Navbar from '@/components/landing/Navbar'
import Reports from './Reports/Reports'

const Society = (props) => {
  const { data } = props
  return (
    <>
      <Navbar navItems={['ABOUT', 'TEAM']} />
      <div className={styles.society}>
        <SocietyHeading
          imageUrl={data.imageUrl}
          title={data.title}
          alt={data.name}
        />
        <SocietyInfo
          name={data.name}
          description={data.description.long}
        />
        {data.report ? <Reports reports={data.report} name={data.name} /> : null}
        {data.events ? <UpcomingEvents eventsData={data.events} name={data.name} /> : null}
        {data.members.length ? <Teams members={data.members} /> : null}
        {/* {hasPastTeamData ? <Members data={pastTeam} name={details.name} /> : null} */}
      </div>
    </>
  )
}

export default Society
