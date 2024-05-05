import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'
import Emoji from '../../img/emoji.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import Resume from './kishoth_kumar_resume.pdf'
import { Link } from 'react-scroll'

const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="intro_left">
        <div className="intro_name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I Am</span>
          <span>Kishoth Kumar</span>
          <span>Welcome to the world of Full Stack Mastery and DevOps Expertise.
            I specialize in creating seamless user experiences using the MERN stack,
            along with Docker, Kubernetes, Ansible, and AWS. Explore my portfolio to
            see how innovation meets simplicity. Let's work together to shape the future,
            whether on freelance projects or full-time ventures.
          </span>
        </div>
        <div className="intro_buttons">
          <Link to='Contact' smooth={true}>
            <button className="intro_button">Hire Me</button>
          </Link>
          <a href={Resume} download>
            <button className="intro_button r_button">Download CV</button>
          </a>
        </div>

        <div className="intro_icons">
          <a href="https://github.com/kishothkumar" target={'_blank'}><img src={GitHub} alt="" /></a>
          <a href="https://www.linkedin.com/in/kishoth-kumar-074/" target={'_blank'}><img src={LinkedIn} alt="" /></a>
          <a href="https://twitter.com/kishothkumar81" target={'_blank'}><img src={Twitter} alt="" /></a>
          <a href="https://www.instagram.com/kishoth._.kumar/" target={'_blank'}><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="intro_right">
        <img src={Emoji} alt="" />
      </div>
    </div>
  )
}

export default Intro