import React from 'react'
import html from '../../img/html.png'
import cpp from '../../img/cpp.png'
import cprog from '../../img/c.png'
import java from '../../img/java.png'
import css from '../../img/css.png'
import javascript from '../../img/jss.png'
import python from '../../img/python.png'
import reactjs from '../../img/react.png'
import nodejs from '../../img/node.png'
import mysql from '../../img/mysql.png'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-section'>
        <h1 className='heading'>Skills</h1>
        <div className='skills-container'>
            <div className="skill-card">
                <img className='skill-img' src={cpp} alt="" />
                <div className="skill-level">90%</div>
                <h1 className='skill-name'>C++</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={cprog} alt="" />
                <div className="skill-level">85%</div>
                <h1 className='skill-name'>C</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={java} alt="" />
                <div className="skill-level">75%</div>
                <h1 className='skill-name'>JAVA</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={python} alt="" />
                <div className="skill-level">55%</div>
                <h1 className='skill-name'>PYTHON</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={html} alt="" />
                <div className="skill-level">90%</div>
                <h1 className='skill-name'>HTML5</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={css} alt="" />
                <div className="skill-level">82%</div>
                <h1 className='skill-name'>CSS</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={javascript} alt="" />
                <div className="skill-level">70%</div>
                <h1 className='skill-name'>JAVASCRIPT</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={reactjs} alt="" />
                <div className="skill-level">40%</div>
                <h1 className='skill-name'>REACTJS</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={nodejs} alt="" />
                <div className="skill-level">20%</div>
                <h1 className='skill-name'>NODEJS</h1>
            </div>
            <div className="skill-card">
                <img className='skill-img' src={mysql} alt="" />
                <div className="skill-level">40%</div>
                <h1 className='skill-name'>MYSQL</h1>
            </div>
        </div>
    </div>
  )
}

export default Skills