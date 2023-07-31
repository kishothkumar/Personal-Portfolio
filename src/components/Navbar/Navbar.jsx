import React from 'react'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav_wrapper" id='Home'>
            <div className="nav_left">
                <div className="nav_name">Kishoth</div>
                <Toggle />
            </div>
            <div className="nav_right">
                <div className="nav_list">
                    <ul className="nav_ul">
                        <Link to='Home'>
                            <li className='nav_item'>Home</li>
                        </Link>
                        <Link to='Skills' smooth={true}>
                            <li className='nav_item'>Skills</li>
                        </Link>
                        <Link to='Experience' smooth={true}>
                            <li className='nav_item'>Experience</li>
                        </Link>
                        <Link to='Portfolio' smooth={true}>
                            <li className='nav_item'>Portfolio</li>
                        </Link>
                        <Link to='Certificates' smooth={true}>
                            <li className='nav_item'>Certificates</li>
                        </Link>
                    </ul>
                </div>
                <Link to='Contact' smooth={true}>
                    <button className='nav_button'>contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar