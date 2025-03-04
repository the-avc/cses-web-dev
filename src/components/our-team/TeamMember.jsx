import React from "react"
import "./TeamMember.scss"

const TeamMember = (props) => {
  const { name, imageUrl, role, designation } = props
  return (
    <div className='member-card'>
      <img
        src={imageUrl}
        alt={`${name} - ${role}`}
        className='member-image'
        loading='lazy'
      />
      <div className='member-content'>
        <h3 className='member-role'>{role}</h3>
        <div className='member-name'>
          <p>{name}</p>
          <span className='member-title'>({designation})</span>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
