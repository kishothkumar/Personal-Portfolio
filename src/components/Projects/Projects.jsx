import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import ProjectCard from '../ProjectCard/ProjectCard'
import { data } from '../../constants'
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
                    {data.projects.map((project, index) => (
                        <ProjectCard
                            key={project.name + index}
                            image={project.image}
                            name={project.name}
                            info={project.info}
                            github={project.github}
                            website={project.website}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects