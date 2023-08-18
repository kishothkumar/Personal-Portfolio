import React from 'react'
import './TechStack.css'

const TechStack = ({ name, image }) => {
    return (
        <div className="skill-card">
            <img className='skill-img' src={image} alt="" />
            <h1 className='skill-name'>{name}</h1>
        </div>
    )
}

export default TechStack
