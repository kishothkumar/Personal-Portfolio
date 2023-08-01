import React from 'react'
import './Timeline.css'

const Timeline = () => {
    return (
        <div className='timeline' id='Experience'>
            <div className="timeline-content">
                <h2 className='timeline-heading'>Education</h2>
                <div className="content">
                    <div className="card">
                        <h4>2020-2024</h4>
                        <h3>RMK College of Engineering and Technology</h3>
                        <p>Currently pursuing a Bachelor's degree in the CSE department at RMK College of Engineering and Technology with a CGPA of 8.90.</p>
                    </div>
                    <div className="card">
                        <h4>2018-2020</h4>
                        <h3>Sir Ramaswami Mudaliar Higher Secondary School</h3>
                        <p>Completed my 11th and 12th-grade education at Sir Ramaswami Mudaliar Higher Secondary School. I scored 76.67% in my 12th-grade examinations.</p>
                    </div>
                    <div className="card">
                        <h4>2008-2018</h4>
                        <h3>Sree Hari Saradha Vidyalaya Matriculation School</h3>
                        <p>Completed my primary education at Sree Hari Saradha Vidyalaya Matriculation School. I scored 90% in my 10th-grade examinations.</p>
                    </div>
                </div>
            </div>
            <div className="timeline-content">
                <h2 className='timeline-heading'>Experience</h2>
                <div className="content">
                    <div className='card'>
                        <h4>April 2022</h4>
                        <h3>TCS ION | Intern</h3>
                        <p>Worked on the project titled Automate Detection of Different Emotions from Textual Comments and Feedback</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline