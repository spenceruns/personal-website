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
    return (
      <div className="skills-icon-container">
        <i className={`devicon-${this.props.skill.toLowerCase().replace(".", "")}-plain skills-icon ${spin}`}
        onClick={this.addSpin}></i>
        <div className="skills-name">{this.props.skill}</div>
      </div>
    )
  }
}
