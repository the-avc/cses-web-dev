import React, { act, useState } from "react";
import "./TeamMemberPopup.scss";

const TeamMemberPopup = ({ member, onClose }) => {
    const {
        name,
        imageUrl,
        role,
        designation,
        about,
        experience = [],
        linkedin
    } = member;

    const [activeTab, setActiveTab] = useState('about');

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains("popup-backdrop")) {
            onClose();
        }
    };

    return (
        <div className="popup-backdrop" onClick={handleBackdropClick}>
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>

                <div className="popup-header">
                    <div className="popup-header-content">
                        <img
                            src={imageUrl}
                            alt={`${name} - ${role}`}
                            className="popup-image"
                        />
                        <div className="popup-title">
                            <h2 className="popup-name">{name}</h2>
                            <h3 className="popup-role">{role}</h3>
                            <p className="popup-designation">{designation}</p>

                            <div className="social-links">
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="popup-tabs">
                    <button
                        className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        About
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        Experience
                    </button>
                </div>

                <div className="popup-body">
                    {activeTab === 'about' && (
                        <div className="tab-content about-section">
                                <div className="popup-bio">
                                    <h4>About</h4>
                                    <p className="no-data">{
                                        about===undefined ? "No data available" : about
                                        }</p>
                                </div>
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="tab-content experience-section">
                            <h4>Work Experience</h4>
                            {experience && experience.length > 0 ? (
                                <div className="timeline">
                                    {experience.map((exp, index) => (
                                        <div key={index} className="timeline-item">
                                           <h5>EXP</h5>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-data">No experience data available</p>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TeamMemberPopup;