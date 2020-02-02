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
      <div className="about-me-page-container">
        <div className="about-me-content">
          <div className="about-me-left">
            <div className="about-me-title">About Me</div>
            <img src="./images/profile-pic.jpeg" alt="" className="about-me-image"/>
            <div className="about-me-icon-container">
              <a href="https://github.com/spenceruns" className="about-me-icon">
                <i className="fab fa-github"></i>
                <div className="icon-name">Github</div>
              </a>
              <a href="https://www.linkedin.com/in/spenceruns/" className="about-me-icon">
                <i className="fab fa-linkedin"></i>
                <div className="icon-name">Linkedin</div>
              </a>
              <a href="mailto:spenceruns@gmail.com" className="about-me-icon">
                <i className="fas fa-envelope"></i>
                <div className="icon-name">Email</div>
              </a>
              <a href="Spencer_Allen.pdf" className="about-me-icon">
                <i className="fas fa-file-alt"></i>
                <div className="icon-name">Resume</div>
              </a>
            </div>
          </div>
          <div className="about-me-right">
            <p className="about-me-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum suscipit ligula consectetur efficitur. Mauris faucibus arcu a est suscipit, sit amet vehicula sapien convallis. Etiam id quam quis nunc mollis molestie. Ut ullamcorper tempus est. In euismod non ligula vel egestas. Cras gravida ipsum vitae odio ornare eleifend congue non dui. Nullam eget consequat metus. Duis quis venenatis urna, a convallis velit. Pellentesque volutpat lorem in dapibus malesuada. In ut dolor et libero blandit varius id sit amet quam. Nulla egestas erat tortor, sed cursus purus hendrerit sed. Donec suscipit tempor mollis. Praesent ultricies, libero ut interdum laoreet, libero ipsum ornare quam, at varius nisl dolor eu risus. Nunc justo erat, laoreet vitae fermentum a, placerat ut augue. Duis et massa vel magna suscipit tristique. Nulla pulvinar, ipsum eget commodo porta, est nibh interdum purus, vitae sagittis orci erat a sem.</p>
            <p className="about-me-message">Mauris efficitur lorem vitae quam finibus, porta dictum orci dapibus. Aliquam scelerisque sapien sit amet ornare eleifend. Pellentesque in cursus tortor. Etiam pulvinar tellus elit. Donec sit amet arcu ac ligula dapibus semper eget facilisis ligula. Quisque at dui placerat, eleifend tellus at, suscipit nulla. Sed sit amet dictum sapien, et scelerisque nisl. Nunc pretium molestie facilisis. Cras ultrices nisl sed tempus ultricies. Mauris nec sodales eros. Suspendisse sit amet tincidunt mauris, ac malesuada lorem. Aenean a gravida orci, quis pharetra est. Suspendisse in tellus ut nisi tempor ultrices facilisis ac erat. Donec purus orci, aliquam a elit ut, scelerisque luctus nisl. Integer hendrerit urna ex, lobortis interdum odio eleifend eu. Donec aliquet iaculis felis at eleifend.</p>
          </div>
        </div>
      </div>
    )
  }
}
