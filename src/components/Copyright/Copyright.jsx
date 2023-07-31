import React from 'react'
import './Copyright.css'

const Copyright = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>Copyright &copy; CherryTech {year}</footer>
    )
}

export default Copyright
