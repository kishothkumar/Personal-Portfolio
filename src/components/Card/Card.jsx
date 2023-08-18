import React from 'react'
import './Card.css'

const Card = ({ year, name, info }) => {
    return (
        <div className="card">
            <h4>{year}</h4>
            <h3>{name}</h3>
            <p>{info}</p>
        </div>
    )
}

export default Card
