import React, { Component, useEffect } from 'react';
import styles from "../styles/Hero.css"
import '../styles/Hero.scss';

const Navbar = () => {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>Jubayer Ahmed</h1>
            </div>
            <div className='lower-text'>
                <h1>CUNY Hunter College | Daedalus Honors Scholar | Developer</h1>
            </div>
            <div>
                <a href='mailto:jubayer7a@gmail.com' className='contact-button'>Contact Me</a>
            </div>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    )
}

export default Navbar;