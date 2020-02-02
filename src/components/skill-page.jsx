import React from 'react'
import AOS from 'aos';

export default function SkillsPage(props) {
  AOS.init();
  return (
    <div className="skills-page-container"
    data-aos="fade-bottom"
    data-aos-easing="linear"
    data-aos-mirror="true"
    data-aos-anchor=".about-me-page-container"
    data-aos-anchor-placement="center-center"
    data-aos-duration="50">
      <h1 className="skills-title"><span className="tags">{"<"}</span>h1<span className="tags">{">"}</span>Skills<span className="tags">{"</"}</span>h1<span className="tags">{">"}</span></h1>
      <div className="skills-page-icons-container">
        <div className="skills-icon-container">
          <i className="devicon-javascript-plain skills-icon"></i>
          <div className="skills-name">JavaScript</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-html5-plain skills-icon"></i>
          <div className="skills-name">HTML5</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-css3-plain skills-icon"></i>
          <div className="skills-name">CSS3</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-bootstrap-plain skills-icon"></i>
          <div className="skills-name">Bootstrap</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-react-plain skills-icon"></i>
          <div className="skills-name">React</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-jquery-plain skills-icon"></i>
          <div className="skills-name">jQuery</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-nodejs-plain skills-icon"></i>
          <div className="skills-name">Node.js</div>
        </div>
        <div className="skills-icon-container">
          <i className="devicon-postgresql-plain skills-icon"></i>
          <div className="skills-name">PostgreSQL</div>
        </div>
      </div>
    </div>
  )
}
