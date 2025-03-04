import React from 'react'
import './UEventCard.scss'

const UEventCard = () => {
  return (
    <div className='UEventCard'>
      <div className="head">
        <h2 className="title">Aglomeration</h2>
        <div className='organizer'>By <span className="organizerName">CSES</span> </div>
      </div>
      <div className="Details">
        <p>Venue: <span className='value'> GJLT (+91 99222 23270)</span></p>
        <p>Event Date: <span className='value'> 31/02/2025</span></p>
      </div>
    </div>
  )
}

export default UEventCard