import TeamMember from './TeamMember.jsx'
import Title from '@/components/title/Title'
import './OurTeam.scss'
import data from '../../data/csesOfficials.json'

const OurTeam = (props) => {
  let { members } = props
  if (!members) {
    members = data.members
  }
  return (
    <section
      id='team'
      className='teamWrapper'
    >
      <div className='teamContent'>
        <div className='teamHeader'>
          <Title
            mainTitle='Meet the'
            subTitle='Executive Committee'
          />
        </div>
        <div className='teamGrid'>
          {members.map((member, index) => {
            return (
              <TeamMember
                key={index}
                {...member}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
