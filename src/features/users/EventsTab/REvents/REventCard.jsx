import React from 'react'
import './REventCard.scss'

const EventCard = () => {
    return (
        <div className='EventCard'>
            <div className="head">
                <h2 className="title">Recruitathon 2.0</h2>
                <div className='organizer'>By <span className="organizerName">WebCSE</span> </div>
            </div>
            <ul className="details">
                <li>Total prizes worth 6,000 INR</li>
                <li>Project mentors will be allotted soon so join the group ASAP.</li>
            </ul>
            <div className="endingDetails">
                <p>Contact: <span className='value'> Pratham (+91 99222 23270)</span></p>
                <p>Project Submission Deadline: <span className='value'> 23/12/2024</span></p>
            </div>
            <div className="status">REGISTERED!</div>
        </div>
    )
}

export default EventCard