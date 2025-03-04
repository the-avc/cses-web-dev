import React from 'react'
import './homeTab.scss'
import LeftArrow from './images/left_arrow.svg'
import RightArrow from './images/rightArrow.svg'

const homeTab = () => {

    const handleLeftScroll=()=>{
        const cont=document.querySelector('.eventCards');
        cont.scrollLeft-=584;
    }
    const handleRightScroll=()=>{
        const cont=document.querySelector('.eventCards');
        cont.scrollLeft+=584;
    }

    return (
        <div className='homeTab'>
            <ul>
                <h2 className='heading notifications'>Notifications</h2>
                <li>Fee payment due for the academic year 2025-2026, please act immediately.
                    BufferedReader inviting applications for their Student Achievement section, fill out the form here.
                    CSE Newsletter (November ‘24) out now! Check it out <a href="">here</a>.</li>
                <li>BufferedReader inviting applications for their Student Achievement section, fill out the form here.</li>
                <li>CSE Newsletter (November ‘24) out now! Check it out <a href="">here</a>.</li>
            </ul>


            <div className="OngoingEv">
                <div className="onEvHeadContainer">
                    <h2 className="heading OngoingEvents">Ongoing Events</h2>
                    <div >
                        {/* Left Arrow */}
                        <svg className='ongoingEvNav' onClick={handleLeftScroll} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1024_692)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14452 31.4478L31.7719 54.0752L35.5431 50.304L19.3538 34.1146L53.2949 34.1147V28.7813H19.3535L35.5431 12.5916L31.7719 8.82037L9.14452 31.4478Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1024_692">
                                    <rect width="64" height="64" fill="white" transform="matrix(-1 0 0 -1 64 64)" />
                                </clipPath>
                            </defs>
                        </svg>

                        {/* Right Arrow */}
                        <svg className='ongoingEvNav' onClick={handleRightScroll} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1024_688)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8555 32.5523L32.2281 9.92488L28.4569 13.6961L44.6462 29.8855L10.7051 29.8854V35.2188H44.6465L28.4569 51.4085L32.2281 55.1797L54.8555 32.5523Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1024_688">
                                    <rect width="64" height="64" fill="white" transform="matrix(-1 0 0 -1 64 64)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="eventCards">
                    {/* sample card */}
                    <div className="evCard">
                        <h2 className='evName'>Recruitathon 2.0
                            <span className='organizer'>By WebCSE</span></h2>
                        <ul className='evDetails'>
                            <li>Total prizes worth 6,000 INR</li>
                            <li>Project mentors will be allotted soon so join the group ASAP.</li>
                        </ul>
                        <div className='evNote'>
                            <p>Contact: <span> Pratham (+91 99222 23270)</span></p>
                            <p>Project Submission Deadline: <span> 23/12/2024</span></p>
                        </div>
                    </div>
                    <div className="evCard">
                        <h2 className='evName'>Uddbhav 2025
                            <span className='organizer'>By CSES</span></h2>
                        <ul className='evDetails'>
                            <li>The grandest cultural fest of our department.</li>
                            <li>Chief Guest: Dr. Abdhesh Kumar Singh, Executive VP, Reliance Jio Infocomm Limited.</li>
                        </ul>
                        <div className='evNote'>
                            <p>Contact: <span> Pratham (+91 99222 23270)</span></p>
                            <p>Project Submission Deadline: <span> 23/12/2024</span></p>
                        </div>
                    </div>
                    <div className="evCard">
                        <h2 className='evName'>Uddbhav 2025 
                            <span className='organizer'>By CSES</span></h2>
                        <ul className='evDetails'>
                            <li>The grandest cultural fest of our department.</li>
                            <li>Chief Guest: Dr. Abdhesh Kumar Singh, Executive VP, Reliance Infocomm Ltd.</li>
                        </ul>
                        <div className='evNote'>
                            <p>Contact: <span>Pratham (+91 99222 23270)</span></p>
                            <p>Project Submission Deadline:<span> 23/12/2024</span></p>
                        </div>
                    </div>
                    <div className="evCard">
                        <h2 className='evName'>Uddbhav 2025 <span className='organizer'>By CSES</span></h2>
                        <ul className='evDetails'>
                            <li>The grandest cultural fest of our department.</li>
                            <li>Chief Guest: Dr. Abdhesh Kumar Singh, Executive VP, Reliance Jio Infocomm Limited.</li>
                        </ul>
                        <div className='evNote'>
                            <p>Contact: <span> Pratham (+91 99222 23270)</span></p>
                            <p>Project Submission Deadline: <span> 23/12/2024</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homeTab