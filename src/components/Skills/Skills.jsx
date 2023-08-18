import React from 'react'
import { data } from '../../constants'
import TechStack from '../TechStack/TechStack'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills-section' id='Skills'>
            <h1 className='heading'>Skills</h1>
            <div className='skills-container'>
                {data.skills.map((skill, index) => (
                    <TechStack key={skill.name + index} name={skill.name} image={skill.img} />
                ))}
            </div>
        </div>
    )
}

export default Skills