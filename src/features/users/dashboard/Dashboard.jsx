import { useState } from 'react'
import './Dashboard.scss'

let events = [
   {
      name: 'Name of the Event',
      detail:
         'Some information about the event that is to be conducted. Some information about the event that is to be conducted. English Wikipedia, often as a stand-in for Wikipedia overall, has been praised for its enablement of the democratization of knowledge, extent of coverage, unique structure, culture, and reduced degree of commercial bias. It has been criticized for exhibiting systemic bias, particularly gender bias against women and ideological bias.[7][8] While its reliability was frequently criticized in the 2000s, it has improved over time, receiving greater praise in the late 2010s and early 2020s.',
   },
   {
      name: 'Name of the Event 1',
      detail: 'this is a website for CSE Society ',
   },
   {
      name: 'Name of the Event',
      detail:
         'Some information about the event that is to be conducted. Some information about the event that is to be conducted. ',
   },
   {
      name: 'Name of the Event',
      detail:
         'Some information about the event that is to be conducted. Some information about the event that is to be conducted. ',
   },
]

const Dashboard = () => {
   return (
      <>
         <h1>Dashboard</h1>
         <div className="recent-orders">
            <h2>What is CSE Society?</h2>
            <div className="box">
               <p className="society-description">
                  The Computer Science and Engineering Society(CSES) is a state
                  of the art initiative by the Department of Computer Science
                  and Engineering, IIT(ISM), Dhanbad commenced in the year 2011.
                  The society serves as the harbringer of academic excellence
                  coupled with a variety of extracurricular diasporas. We, at
                  the CSE Society, aim to ensure that no one should remain
                  ignorant of the vast opportunities prevailing in the tech
                  world and thus strive to bring out the best in everyone,
                  patronizing every kind of unique talents and novel ideas.
                  Welcoming one and all aboard on the abode of knowledge.
               </p>
            </div>
         </div>
      </>
   )
}

export default Dashboard

{
   /* <div className="eventHead">
      {events.map((item, index) => (
         <div
            key={index}
            className="eventItem"
            onClick={() => setCurEvent(item)}
         >
            <span>{item.name}</span>
            <p>{item.detail}</p>
         </div>
      ))}
   </div>
   <div>
      <h1>{curEvent.name}</h1>
      <p>{curEvent.detail}</p>
   </div> */
}
