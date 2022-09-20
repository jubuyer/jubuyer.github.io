import React from 'react'
import '../styles/timeline.scss';

const Resume = () => {
  return (
        <div>
            <h1 className='heading-timeline'>Experience.</h1>
        <div id="timeline">
            {/* <!-- Timeline Item, copy from here to create various boxes --> */}
            <div class="timeline-item">
                {/* <!--Icon inside the circle--> */}
                <div class="timeline-icon">
                    <img src="../logo192.png" width="25px" alt=""></img>
                </div>
                {/* <!-- Content from timeline box and position (right or left)--> */}
                <div class="timeline-content left">
                    <h2>Arch Street Communications · <em>Digital Intern</em></h2>
                    <p>
                    • Supervise digital interns and internal/external client projects
                    <br></br>• Manage and ensure cybersecurity of multiple client domains through
supervision of SSL Certificates and backend resource usage through cPanel
                    <br></br>• Parse and clean CSV data files using C++ and Excel to present to
stakeholders and team leads
                    <br></br>• Design and maintain content across multiple social media platforms using
enterprise CRM and admin tools
                    <br></br>• Innovated database and analytics templates that became the company
standard, boosting conversion rates across social media platforms
                    </p>
                    <a href="https://www.asc-pr.com/" class="btn">Learn More</a>
                </div>
            </div>

            {/* <!-- Timeline Item, copy from here to create various boxes --> */}
            <div class="timeline-item">
                {/* <!--Icon inside the circle--> */}
                <div class="timeline-icon">
                    <img src="../logo192.png" width="25px" alt=""></img>
                </div>
                {/* <!-- Content from timeline box and position (right or left)--> */}
                <div class="timeline-content right">
                    <h2>Craving · <em>Frontend Developer</em></h2>
                    <p>
                    • Created company website using React.js focusing on responsiveness and
CSS techniques to capture target audience
                    <br></br>• Led web development team in updating React components and website
information
                    <br></br>• Conducted market research to accurately target audience and improve user
experience and interface
                    </p>
                    {/* <a href="#" class="btn">Learn More</a> */}
                </div>
            </div>

            {/* <!-- Timeline Item, copy from here to create various boxes --> */}
            <div class="timeline-item">
                {/* <!--Icon inside the circle--> */}
                <div class="timeline-icon">
                    <img src="../logo192.png" width="25px" alt=""></img>
                </div>
                {/* <!-- Content from timeline box and position (right or left)--> */}
                <div class="timeline-content left">
                    <h2>Google Developer Student Club, Hunter College · <em>Open Source Project Maintainer</em></h2>
                    <p>
                    • Managed pull requests and conducted code review of Github repositories in
C++, Python, and Javascript
                    <br></br>• Lead workshops on using git and Github for beginners and contributing to
open-source projects
                    <br></br>• Work in a team to create projects promoting open-source coding and foster a
positive learning environment
                    </p>
                    {/* <a href="#" class="btn">button</a> */}
                </div>
            </div>

            <div class="timeline-item">
                {/* <!--Icon inside the circle--> */}
                <div class="timeline-icon">
                    <img src="../logo192.png" width="25px" alt=""></img>
                </div>
                {/* <!-- Content from timeline box and position (right or left)--> */}
                <div class="timeline-content right">
                    <h2>Best Buy · <em>Sales Advisor</em></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
                    </p>
                    {/* <a href="#" class="btn">button</a> */}
                </div>
            </div>
        </div>
        
        
        </div>
  );
};

export default Resume;
