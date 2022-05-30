import React from 'react'
import '../styles/timeline.scss';

const Resume = () => {
  return (
        <div id="timeline">
            {/* <!-- Timeline Item, copy from here to create various boxes --> */}
            <div class="timeline-item">
                {/* <!--Icon inside the circle--> */}
                <div class="timeline-icon">
                    <img src="assets/images/star.svg" width="25px" alt=""></img>
                </div>
                {/* <!-- Content from timeline box and position (right or left)--> */}
                <div class="timeline-content right">
                    <h2>LOREM IPSUM DOLOR</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
                    </p>
                    <a href="#" class="btn">button</a>
                </div>
            </div>
        </div>
  );
};

export default Resume;
