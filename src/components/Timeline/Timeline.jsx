import React from 'react'
import { data } from '../../constants'
import Card from '../Card/Card'
import './Timeline.css'

const Timeline = () => {
    return (
        <div className='timeline' id='Experience'>
            <div className="timeline-content">
                <h2 className='timeline-heading'>Education</h2>
                <div className="content">
                    {data.education.map((education, index) => (
                        <Card key={education.name + index} year={education.year} name={education.name} info={education.info} />
                    ))}
                </div>
            </div>
            <div className="timeline-content">
                <h2 className='timeline-heading'>Experience</h2>
                <div className="content">
                    {data.experience.map((exp, index) => (
                        <Card key={exp.name + index} year={exp.year} name={exp.name} info={exp.info} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline