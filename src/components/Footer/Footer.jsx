import React from 'react'
import Wave from '../../img/wave.png'
import { FaInstagram, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

  return (
    <div className='app_footer'>
      <img src={Wave} alt="" />
      <div className="footer_content">
        <span>kishothkumarcse@gmail.com</span>
        <div className="footer_icons">
          <a href="https://www.instagram.com/kishoth._.kumar/" target={'_blank'}><FaInstagram size='3rem' /></a>
          <a href="https://github.com/kishothkumar" target={'_blank'}><FaGithubSquare size='3rem' /></a>
          <a href="https://www.linkedin.com/in/kishoth-kumar-074/" target={'_blank'}><FaLinkedin size='3rem' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer