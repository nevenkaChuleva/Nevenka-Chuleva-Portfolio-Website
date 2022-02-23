import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export default function Navbar(){
    const [navbarStatus, openTheNavbar] = useState(false)

    const toggleNavbar = () => {
        openTheNavbar(!navbarStatus);
    }

    const closeNavbar = () => {
        openTheNavbar(false);
    }

    return(
        <section className="navbar--container" id={navbarStatus ? "opened" : "closed"}>
                    <nav className="navbar--navigation">
                        <ul onClick={closeNavbar}> 
                            <a href="#home" > Home </a>
                            <a href="#about"> About </a>
                            <a href="#projects"> Projects </a>
                            <a href="#contact"> Contact </a>
                        </ul>
                    </nav>
                    <div className="toggleBox">
                        <div onClick={toggleNavbar} > {navbarStatus ? <FaTimes /> : <FaBars />} </div>
                    </div>
        </section>
    )
}