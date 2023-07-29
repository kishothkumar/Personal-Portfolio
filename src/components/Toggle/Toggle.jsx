import React from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import './Toggle.css'

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }

    return (
        <div className="toggle"
            onClick={handleClick}>
            <BiSun />
            <BiMoon />
            <div className="toggle_button"
                style={darkMode ? { right: '2px' } : { left: '2px' }}
            ></div>
        </div>
    )
}

export default Toggle