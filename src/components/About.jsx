import React from 'react'
import styles from "../styles/About.css"
import WTC from "../assets/about/wtc.jpeg"

const About = () => {
    return (
        <div className='about-container'>
            <div className='heading'>
                <h1>About</h1>
            </div>
            <div className='about-block'>
                <p className='about-body'>
                    I'm Jubayer Ahmed, undergraduate student at CUNY Hunter College 
                    majoring in computer science. I am currently working on my
                    skills in frontend development and working with data. 
                </p>
                <div className='nice-image'>
                    <img src={WTC} className='nice-image' alt='Photography'></img>
                </div>
            </div>
        </div>
    )
}

export default About;
