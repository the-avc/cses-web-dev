import { useState } from 'react';
import ClubSection from './ClubSection.jsx';
import Title from '../../../../components/title/Title.jsx';
import InitiativeList from './InitiativeList.jsx';
import initiatives from '@/data/initiatives.json';

import './SocietyInitiatives.scss';

function SocietyInitiatives() {
  const [activeTab, setActiveTab] = useState('initiatives');

  // Filter initiatives and events
  const initiativesList = initiatives.filter((item) => !item.isEvent);
  const eventsList = initiatives.filter((item) => item.isEvent);

  return (
    <section id='initiatives' className='clubs-section'>
      <Title mainTitle='Initiatives & Events' subTitle='under CSES' />

      {/* Toggle Buttons */}
      <div className='tab-buttons'>
        <button
          className={activeTab === 'initiatives' ? 'active' : ''}
          onClick={() => setActiveTab('initiatives')}
        >
          Initiatives
        </button>
        <button
          className={activeTab === 'events' ? 'active' : ''}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
      </div>

      {/* List Section */}
      <InitiativeList
        initiatives={
          activeTab === 'initiatives'
            ? [...initiativesList.map((item) => item.name), 'Buffered Reader'] // Adding Buffered Reader
            : eventsList.map((item) => item.name)
        }
      />

      {/* Club Sections */}
      <div className='club-sections'>
        {(activeTab === 'initiatives' ? initiativesList : eventsList).map(
          (data, index) => (
            <ClubSection
              key={index}
              name={data.name}
              description={data.description.short}
              image={data.imageUrl}
              link={data.link}
            />
          )
        )}

        {activeTab === 'initiatives' && (
          <ClubSection
            actualLink='https://bufferedreader.iitism.ac.in'
            name='Buffered Reader'
            description="The biannual magazine of the CSE department at IIT (ISM) Dhanbad, it isn't just a publication; it's a vibrant platform showcasing the department's cutting-edge research, student achievements, and the ever-evolving world of computer science."
            image='logo/BufferedReader.png'
          />
        )}
      </div>
    </section>
  );
}

export default SocietyInitiatives;
