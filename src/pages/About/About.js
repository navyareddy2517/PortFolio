import React from "react";
import "./About.css";
import { motion } from "framer-motion"; 

const About = () => {
  return (
    <>
      <motion.div
        className="about"
        id="about"
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 0, repeat:0 }}
      >
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hello! I’m a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy creating responsive and user-friendly websites that turn ideas into real digital experiences.
              I have hands-on experience building full-stack applications using the MERN stack (MongoDB, Express, React, Node.js) and I’m comfortable working with version control systems like Git and GitHub. My focus is on writing clean, efficient code while continuously learning new technologies to improve my skills.
              As a fresher, I’m eager to apply my knowledge in real-world projects, collaborate with teams, and contribute to meaningful applications. My goal is to grow as a developer while helping organizations build modern and impactful web solutions.
              I’m currently open to internships, trainee roles, and junior developer opportunities where I can contribute, learn, and grow.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
