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
        <div className='skills-section' id='Skills'>
            <h1 className='heading'>Skills</h1>
            <div className='skills-container'>
                <div className="skill-card">
                    <img className='skill-img' src={cpp} alt="" />
                    <h1 className='skill-name'>C++</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={cprog} alt="" />
                    <h1 className='skill-name'>C</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={java} alt="" />
                    <h1 className='skill-name'>JAVA</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={python} alt="" />
                    <h1 className='skill-name'>PYTHON</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={html} alt="" />
                    <h1 className='skill-name'>HTML5</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={css} alt="" />
                    <h1 className='skill-name'>CSS</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={javascript} alt="" />
                    <h1 className='skill-name'>JAVASCRIPT</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={reactjs} alt="" />
                    <h1 className='skill-name'>REACTJS</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={nodejs} alt="" />
                    <h1 className='skill-name'>NODEJS</h1>
                </div>
                <div className="skill-card">
                    <img className='skill-img' src={mysql} alt="" />
                    <h1 className='skill-name'>MYSQL</h1>
                </div>
            </div>
        </div>
    )
}

export default Skills