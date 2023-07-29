import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav_wrapper">
            <div className="nav_left">
                <div className="nav_name">Kishoth</div>
                <Toggle />
            </div>
            <div className="nav_right">
                <div className="nav_list">
                    <ul className="nav_ul">
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Certificates</li>
                    </ul>
                </div>
                <button className='nav_button'>contact</button>
            </div>
        </div>
    )
}

export default Navbar