import React from 'react'

export default class AboutMePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showList: false
    }
    this.toggleList = this.toggleList.bind(this)
  }

  toggleList() {
    this.setState({ showList: !this.state.showList })
  }

  render() {
    return (
      <div className="about-me-page-container" id="about-me">
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-content">
          <div className="about-me-left">
            <p className="about-me-message">Thanks for checking out my portfolio! My name is Spencer and I’m a software engineer based in Orange County, California. I have a knack for creating solutions utilizing technical tools and soft skills.</p>
            <p className="about-me-message">After a fulfilling tenure as a Genius at Apple, I discovered coding and fell in love with it because of its continuous learning and deep problem-solving culture. I decided to attend an accelerated web development program to kick-start my new found passion.</p>
            <p className="about-me-message">Having completed this program, I am now versed in scripting languages such as JavaScript (ES5/ES6+), React, Node.js, HTML5, CSS3 and more as shown below. I have worked in small teams, utilizing version control systems (Git/GitHub) and planning resources (Figma/Meister Task) along with great communication to implement and deploy a variety of web projects. I have designed and programmed projects using a diverse selection of both frontend and backend languages. Because of my love of coding I am constantly learning new things and using my brain in challenging ways.</p>
            <p className="about-me-message">I’m excited to advance my skills and experiences by exploring new opportunities.</p>
            <strong className="about-me-message">I love coding!</strong>
          </div>
          <div className="about-me-right">
            <img src="./images/profile-pic.jpeg" alt="" className="about-me-image" />
            <div className="about-me-icon-container">
              <a href="https://github.com/spenceruns" target="_blank" className="about-me-icon">
                <i className="fab fa-github"></i>
                <div className="icon-name">GitHub</div>
              </a>
              <a href="https://www.linkedin.com/in/spenceruns/" target="_blank" className="about-me-icon">
                <i className="fab fa-linkedin"></i>
                <div className="icon-name">Linkedin</div>
              </a>
              <a href="mailto:spenceruns@gmail.com" target="_blank" className="about-me-icon">
                <i className="fas fa-envelope"></i>
                <div className="icon-name">Email</div>
              </a>
              <a href="Spencer_Allen.pdf" target="_blank" className="about-me-icon">
                <i className="fas fa-file-alt"></i>
                <div className="icon-name">Resume</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
