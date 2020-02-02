import React from 'react'

export default class SkillItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.addSpin = this.addSpin.bind(this)
  }

  addSpin() {
    this.setState({ isClicked: true },
      () => setTimeout(() => this.setState({ isClicked: false }), 750))
  }

  render() {
    const spin = this.state.isClicked && "spin"
    let icon = null
    switch(this.props.skill) {
      case "React":
        icon = "devicon-react-original";
        break;
      case "Express":
        icon = "devicon-express-original-wordmark";
        break;
      case "Node.js":
        icon = "devicon-nodejs-plain"
        break;
      default:
        icon =`devicons devicons-${this.props.skill.toLowerCase()}`
    }
    return (
      <div className="skills-icon-container"
        onClick={this.addSpin}>
        <i className={`${icon} skills-icon ${spin}`}></i>
        <div className="skills-name">{this.props.skill}</div>
      </div>
    )
  }
}
