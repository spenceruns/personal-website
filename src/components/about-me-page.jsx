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
            <p className="about-me-message">As you probably saw above, my name is Spencer, thanks for checking out my portfolio! I’m a software engineer based in Orange County, California who has a knack for programing websites and solving problems.</p>
            <p className="about-me-message">After no longer feeling challenged as a Genius at Apple, I discovered coding and naturally fell in love, with its continuous learning and deep problem solving.</p>
            <p className="about-me-message">I am versed in languages such as JavaScript (ES5/ES6+), React, Node.js, HTML5, CSS3 and more shown below. I have worked in teams of 2-4, utilizing version control systems (Git/GitHub), planning resources (Figma/Meister Task) and great communication to implement and deploy a variety of projects. I have designed and programmed solo projects as well using a diverse selection on both front and back end languages. I am constantly learning new things and using my brain in different ways and I really have to thank coding.</p>
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


{/* <span className="tags">{"<"}</span>h1 < span className = "tags" > { ">"}</span > */}
