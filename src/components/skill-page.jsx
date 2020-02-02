import React from 'react'
import AOS from 'aos';

export default function SkillsPage(props) {
  AOS.init();
  return (
    <div className="skills-page-container"
    data-aos="fade-up"
    data-aos-anchor=".about-me-page-container"
    data-aos-anchor-placement="center-center"
    data-aos-duration="50">
      <div>hi</div>
    </div>
  )
}
