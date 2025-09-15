import React from "react";
import "./Techstack.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Node JS", level: 90 },
  { name: "MongoDB", level: 90 },
  { name: "Express.JS", level: 80 },
  { name: "Firebase", level: 75 },
  { name: "Postman", level: 85 },
   { name: "SQL", level: 85 },
  { name: "Git / Github", level: 90 },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2 className="title">My Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
