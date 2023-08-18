import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GiSpiderWeb } from 'react-icons/gi'
import './ProjectCard.css'

const ProjectCard = ({ image, name, info, github, website }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt="" />
            </div>
            <div className="project-info">
                <h3>{name}</h3>
                <p>{info}</p>
                <div className="project-icons">
                    <a href={github} target={'_blank'}><FaGithub /></a>
                    <a href={website} target={'_blank'}><GiSpiderWeb /></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
