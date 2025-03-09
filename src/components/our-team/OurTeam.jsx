import React, {useState} from 'react'
import TeamMember from './TeamMember.jsx'
import TeamMemberPopup from './TeamMemberPopup.jsx'
import Title from '@/components/title/Title'
import './OurTeam.scss'
import data from '../../data/csesOfficials.json'

const OurTeam = (props) => {
  let { members } = props
  if (!members) {
    members = data.members
  }
  const [selectedMember, setSelectedMember] = useState(null)
  const handleMemberClick = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };
  const handleClosePopup = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

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
                onClick={() => handleMemberClick(member)}
              />
            )
          })}
        </div>
      </div>
      {selectedMember && (
        <TeamMemberPopup
          member={selectedMember}
          onClose={handleClosePopup}
        />
      )}
    </section>
  )
}

export default OurTeam
