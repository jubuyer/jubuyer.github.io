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
                    • Supervise digital interns in the completion of internal and external projects, including graphic design, social media campaigns, newsletter updating and presentations
                    <br></br>• Design and maintain content across multiple social media platforms using enterprise tools including Microsoft Office, Hootsuite, Squarespace, and Meta Business Suite
                    <br></br>• Create social media analytics and research reports using data analysis tools and procedures
                    <br></br>• Developed social media procedures that boosted impressions by an average of 76% and engagement by an average of 46% across all platforms after one month
                    <br></br>• Helped innovate database and analytics templates that became the company standard
                    </p>
                    <a href="#" class="btn">button</a>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
                    </p>
                    <a href="#" class="btn">button</a>
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
                    <h2>Best Buy · <em>Sales Advisor</em></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
                    </p>
                    <a href="#" class="btn">button</a>
                </div>
            </div>

        </div>
        
        
        </div>
  );
};

export default Resume;
