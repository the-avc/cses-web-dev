import React from 'react'
import './EventsTab.scss'
import REventCard from './REvents/REventCard.jsx'
import UEventCard from './UEvents/UEventCard.jsx'

const EventsTab = () => {
    const handleLeftScrollRE = () => {
        const cont = document.querySelector('.REWrapper');
        cont.scrollLeft -= 574;
    }
    const handleRightScrollRE = () => {
        const cont = document.querySelector('.REWrapper');
        cont.scrollLeft += 574;
    }

    const handleLeftScrollUE = () => {
        const cont = document.querySelector('.UEWrapper');
        cont.scrollLeft -= 574;
    }
    const handleRightScrollUE = () => {
        const cont = document.querySelector('.UEWrapper');
        cont.scrollLeft += 574;
    }
    return (
        <div className='eventsTab'>
            <div className="registeredEv">
                <div className="RE">
                    <h2 className="RETitle">Registered Events</h2>
                    {/* <div className="REUnderline"></div> */}
                    <div className='RENavArrows'>
                        {/* Left Arrow */}
                        <svg className='RENav Left' onClick={handleLeftScrollRE} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <svg className='RENav Right' onClick={handleRightScrollRE} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="REWrapper">
                    <REventCard />
                    <REventCard />
                    <REventCard />
                    <REventCard />
                </div>
            </div>

            <div className="upcommingEv">
                <div className="UE">
                    <h2 className="UETitle">Upcomming Events</h2>
                    <div className='UENavArrows'>
                        {/* Left Arrow */}
                        <svg className='UENav Left' onClick={handleLeftScrollUE} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <svg className='UENav Right' onClick={handleRightScrollUE} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="UEWrapper">
                    <UEventCard />
                    <UEventCard />
                    <UEventCard />
                    <UEventCard />
                    <UEventCard />
                </div>
            </div>

        </div>
    )
}

export default EventsTab