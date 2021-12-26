import React from 'react'
import styles from "../styles/About.css"
import WTC from "../assets/about/wtc.jpeg"
import Resume from "../assets/about/AHMED_JUBAYER_RESUME.pdf"

const About = () => {
    return (
        <div className='about-container'>
            <div className='heading'>
                <h1>About</h1>
            </div>
            <div className='about-block'>
                <p className='about-body'>
                    I'm Jubayer Ahmed, undergraduate student at CUNY Hunter College 
                    majoring in computer science. I'm currently working on my
                    skills in frontend development and processing data. Check out the 
                    projects section to see what technologies I've worked with.
                    <br></br>
                    <br></br>
                    When not working, I love to play soccer and go running in different areas 
                    of NYC. I watch professional football and Formula 1 in my free time and take
                    photos of where I go.
                    <br></br>
                    <br></br>
                    Stay in touch! Contact me through:
                    <div className='contacts'>
                        <a href='mailto:jubayer7a@gmail.com' className='contact-buttons'>email</a>
                        <a href='https://www.linkedin.com/in/jubayera/' className='contact-buttons'>linkedin</a>
                    </div>
                    <br></br>
                    Learn more about what I do here:
                    <div className='contacts'>
                        <a href='https://github.com/jubuyer' className='contact-buttons'>github</a>
                        <a href= {Resume} target = "_blank" className='contact-buttons'>resume</a>
                    </div>
                </p>
                <div className='nice-image'>
                    <img src={WTC} className='nice-image' alt='Photography'></img>
                </div>
            </div>     
        </div>
    )
}

export default About;
