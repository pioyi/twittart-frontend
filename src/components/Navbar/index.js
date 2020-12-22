import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

import { GiHamburgerMenu } from 'react-icons/gi'
import NavbarOptions from './NavbarOptions';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            <Link to="/" className="navbar__brand">Twittart.</Link>
            <ul className={toggle ? "nav-links" : "nav-links hidden"}>
                <NavbarOptions />
            </ul>
            <GiHamburgerMenu
                size={20}
                className={toggle ? "nav-menu active" : "nav-menu"}
                onClick={() => setToggle(!toggle)}
            />  
        </nav>
    )
}

export default Navbar