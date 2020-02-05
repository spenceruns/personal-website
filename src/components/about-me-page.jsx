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
        <h1 className="about-me-title"><span className="tags">{"<"}</span>h1<span className="tags">{">"}</span>About Me<span className="tags">{"</"}</span>h1<span className="tags">{">"}</span></h1>
        <div className="about-me-content">
          <div className="about-me-left">
            <p className="about-me-message"><span className="tags">{"<"}</span>p<span className="tags">{">"}</span>As you probably saw above, my name is Spencer, thanks for checking out my portfolio! I’m a software engineer based in Orange County, CA who has a knack for programing websites and solving problems.</p>
            <p className="about-me-message">I’ve always been interested in how things work and a problem solver at heart. I initially went to University of California: Santa Barbara to study physics, driven by my love for problem solving. Due to life, I had to move on before graduating however, a couple years later, I really found my stride as a Technical Specialist at Apple. I quickly was promoted to Technical Expert and then Genius as a result of my great customer service, hard work, technical skills and problem solving. I had become the top performing Genius in my market and reached a point where I was no longer challenged. I traveled the world for around four months and learned a lot and got experience some incredible adventures. During my travels, I looked into coding and naturally fell in love, with it’s continuous learning and deep problem solving. And here I am today!</p>
            <p className="about-me-message">I am versed in languages such as JavaScript (ES5/ES6+), React, Node.js, HTML5, CSS3 and more, shown below. I have worked in teams of 2-4, utilizing version control systems (Git/Github), planning resources (Figma/Meister Task) and great communication to implement and deploy a variety of projects. I have designed and programmed solo projects as well using a diverse selection on both front and back end languages. I am constantly learning new things and using my brain is different ways and I really have to thank coding.<span className="tags">{"</"}</span>p<span className="tags">{">"}</span></p>
            <strong><span className="tags">{"<"}</span>strong<span className="tags">{">"}</span>I love coding!<span className="tags">{"</"}</span>strong<span className="tags">{">"}</span></strong>
          </div>
          <div className="about-me-right">
            <img src="./images/profile-pic.jpeg" alt="" className="about-me-image" />
            <div className="about-me-icon-container">
              <a href="https://github.com/spenceruns" target="_blank" className="about-me-icon">
                <i className="fab fa-github"></i>
                <div className="icon-name">Github</div>
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
