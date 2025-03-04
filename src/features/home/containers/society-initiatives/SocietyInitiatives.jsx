import ClubSection from './ClubSection.jsx'
import Title from '../../../../components/title/Title.jsx'
import InitiativeList from './InitiativeList.jsx'
import initiatives from '@/data/initiatives.json'

import './SocietyInitiatives.scss'

function SocietyInitiatives() {
  return (
    <section
      id='initiatives'
      className='clubs-section'
    >
      <Title
        mainTitle='Initiatives'
        subTitle='under CSES'
      />
      <InitiativeList
        initiatives={[
          ...initiatives.map((intiative) => intiative.name),
          'Buffered Reader',
        ]}
      />
      <div className='club-sections'>
        {initiatives.map((data, index) => (
          <ClubSection
            key={index}
            name={data.name}
            description={data.description.short}
            image={data.imageUrl}
            link={data.link}
          />
        ))}
        <ClubSection
          actualLInk='https://bufferedreader.iitism.ac.in'
          name='Buffered Reader'
          description="The biannual magazine of the CSE department at IIT (ISM) Dhanbad, it isn't just a publication; it's a vibrant platform showcasing the department's cutting-edge research, student achievements, and the ever-evolving world of computer science."
          image={'logo/BufferedReader.png'}
        />
      </div>
    </section>
  )
}

export default SocietyInitiatives
