import React from "react";
import { MdSchool } from "react-icons/md";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      year: "2020 - 2024",
      title: "Bachelor of Technology (B.Tech)",
      school: "Anurag Engineering College",
      description: "Electronics and Communication Engineering",
    },
    {
      year: "2018 - 2020",
      title: "Intermediate (MPC)",
      school: "Sri Vagdevi Junior College",
      description: "Maths, Physics, and Chemistry specialization.",
    },
    {
      year: "2017 - 2018",
      title: "SSC",
      school: "Sri Chaitanya Grammar High School",
      description: "General Education with strong academic foundation.",
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="text-center mt-3 mb-4">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon">
              <MdSchool size={30} color="#3a53cb" />
            </div>
            <div className="education-content">
              <h3>{edu.title}</h3>
              <h4>{edu.school}</h4>
              <span className="education-year">{edu.year}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
