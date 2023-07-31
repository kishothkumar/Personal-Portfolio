import React from 'react'
import Wave from '../../img/wave.png'
import { FaInstagram, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='app_footer'>
      <img src={Wave} alt="" />
      <div className="footer_content">
        <span>kishothkumarcse@gmail.com</span>
        <div className="footer_icons">
          <a href=""><FaInstagram size='3rem' /></a>
          <a href=""><FaGithubSquare size='3rem' /></a>
          <a href=""><FaLinkedin size='3rem' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer