import React from 'react'
import AOS from 'aos';
import SkillItem from './skill-item';

export default function SkillsPage(props) {
  AOS.init();
  const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "jQuery",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL"
  ]
  return (
    <div className="skills-page-container"
    data-aos="fade-bottom"
    data-aos-easing="linear"
    data-aos-mirror="true"
    data-aos-anchor=".about-me-page-container"
    data-aos-anchor-placement="center-center"
    data-aos-duration="50">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-page-icons-container">
        {skills.map(skill =>
          <SkillItem key={skill} skill={skill} />)}
      </div>
    </div>
  )
}
