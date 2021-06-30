import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' : 'hidden'}
        onClick={toggle}>
            <Link className="p-4" to="/">Domu</Link>
            <Link className="p-4" to="/galery">Galerie</Link>
            <Link className="p-4" to="/about">O Strance</Link>
            <Link className="p-4" to="/contacts">Kontakty</Link>       
        </div>
    )
}

export default Dropdown
