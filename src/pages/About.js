import '../css/About.css';
import React, { useState } from 'react';


function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      
      <div className='footer-image'>
      <img 
          className="profile-pic" 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
        />
      </div>
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <div className="about-text">
          <p>
            Hi! I'm Caner, a passionate web developer with a strong interest in creating dynamic and interactive web applications. 
            I have experience in front-end technologies like React.js, HTML, CSS, and JavaScript. I enjoy solving problems and 
            learning new technologies to stay ahead in the ever-evolving world of web development.
          </p>
          <p>
            When I'm not coding, I enjoy reading, exploring new tech trends, and working on personal projects.
          </p>
        </div>
        
        {/* Dinamik ek açıklama */}
      

        {showMore && (
          <div className="extra-info">
            <h3>More About Me</h3>
            <p>
              I have worked on several personal projects, including building a blog site and a waste management app that helps
              users sort their waste more efficiently. I am always eager to learn new skills and collaborate with others on open-source projects.
            </p>
          </div>
        )}

     
      <div className='btn'>
        <button className="show-more-btn" onClick={handleToggle}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        </div>
      </div>

     

      
    </div>
  );
}

export default About;
