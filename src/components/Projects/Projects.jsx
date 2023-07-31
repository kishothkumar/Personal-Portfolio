import React from 'react'
import project from '../../img/ecommerce.png'
import { FaGithub } from 'react-icons/fa'
import { GiSpiderWeb } from 'react-icons/gi'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import './Projects.css'

const Projects = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='app-projects' id='Portfolio'>
            <div className="projects-heading">
                <h2>Latest Projects</h2>
            </div>
            <div className="container">
                <div className="filter-buttons">
                    <button className='projects-btn'
                        style={{ color: darkMode ? 'white' : '' }}>All</button>
                    <button className='projects-btn'
                        style={{ color: darkMode ? 'white' : '' }}>Web App</button>
                    <button className='projects-btn'
                        style={{ color: darkMode ? 'white' : '' }}>AI Project</button>
                    <button className='projects-btn'
                        style={{ color: darkMode ? 'white' : '' }}>Ongoing</button>
                </div>

                <div className="projects-gallery">
                    <div className="project-card">
                        <div className="project-image">
                            <img src={project} alt="" />
                        </div>
                        <div className="project-info">
                            <h3>Project Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, voluptate. Saepe sint aliquid cupiditate minus, velit voluptates assumenda ipsa dolorem nam, minima repudiandae porro iusto labore.</p>
                            <div className="project-icons">
                                <a href="#"><FaGithub /></a>
                                <a href="#"><GiSpiderWeb /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={project} alt="" />
                        </div>
                        <div className="project-info">
                            <h3>Project Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, voluptate. Saepe sint aliquid cupiditate minus, velit voluptates assumenda ipsa dolorem nam, minima repudiandae porro iusto labore.</p>
                            <div className="project-icons">
                                <a href="#"><FaGithub /></a>
                                <a href="#"><GiSpiderWeb /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={project} alt="" />
                        </div>
                        <div className="project-info">
                            <h3>Project Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, voluptate. Saepe sint aliquid cupiditate minus, velit voluptates assumenda ipsa dolorem nam, minima repudiandae porro iusto labore.</p>
                            <div className="project-icons">
                                <a href="#"><FaGithub /></a>
                                <a href="#"><GiSpiderWeb /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={project} alt="" />
                        </div>
                        <div className="project-info">
                            <h3>Project Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, voluptate. Saepe sint aliquid cupiditate minus, velit voluptates assumenda ipsa dolorem nam, minima repudiandae porro iusto labore.</p>
                            <div className="project-icons">
                                <a href="#"><FaGithub /></a>
                                <a href="#"><GiSpiderWeb /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects