import React from 'react'
import {
  Link,
  animateScroll as scroll
} from 'react-scroll';

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showList: false,
      whichOption: ''
    }
    this.toggleList = this.toggleList.bind(this)
    this.changeOption = this.changeOption.bind(this)
    this.whichView = this.whichView.bind(this)
  }

  toggleList(event) {
    this.setState({showList: !this.state.showList}, () => this.changeOption())
  }

  changeOption() {
    if (!this.state.showList) {
      this.setState({ whichOption: event.target.id })
    }
  }

  whichView() {
    switch(this.state.whichOption) {
      case "":
        return <NoOption showList={this.state.showList} toggleList={this.toggleList} />
      case "About Me":
        return <AboutMeOption showList={this.state.showList} toggleList={this.toggleList} />
      case "Skills":
        return <SkillsOption showList={this.state.showList} toggleList={this.toggleList} />
      case "Tools":
        return <ToolsOption showList={this.state.showList} toggleList={this.toggleList} />
      case "Applications":
        return <ApplicationsOption showList={this.state.showList} toggleList={this.toggleList} />
    }
  }

  render() {
    const showing = this.state.showList && "options-show"
    return (
      <div className="welcome-page-container">
        <div className="welcome-message"><span className="tags">{"<"}</span>div<span className="tags">{">"}</span>Hi,  My name is Spencer! Check out out my&nbsp;
          <ul className="welcome-page-options">
            { this.whichView() }
          </ul>
          <span className="tags">{"</"}</span>div<span className="tags">{">"}</span>
        </div>
     </div>
   )
  }
}

function NoOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li className={`welcome-page-option ${showing} selected`} onClick={props.toggleList} style={{ color: '#393e46'}}>Awesome Stuff!</li>
      <Link to="about-me"
      spy={true}
      smooth={"easeOutCubic"}
      duration={1000}
      id="About Me"
      className={`welcome-page-option about-me ${showing}`}
      onClick={props.toggleList}>
        About Me
        </Link>
      <Link to="skills"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1000}
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
          Skills
          </Link>
      <Link to="tools"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1500}
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools
          </Link>
      <Link to="applications"
        spy={true}
        smooth={"easeOutCubic"}
        duration={2000}
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications
          </Link>
    </>
  )
}

function AboutMeOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li
        id="About Me"
        className={`welcome-page-option about-me ${showing} selected`}
        onClick={props.toggleList}>
        About Me
        </li>
      <Link to="skills"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1000}
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills
          </Link>
      <Link to="tools"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1500}
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools
          </Link>
      <Link to="applications"
        spy={true}
        smooth={"easeOutCubic"}
        duration={2000}
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications
          </Link>
    </>
  )
}

function SkillsOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li
        id="Skills"
        className={`welcome-page-option skills ${showing} selected`}
        onClick={props.toggleList}>
        Skills
        </li>
      <Link to="about-me"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1000}
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me
        </Link>
      <Link to="tools"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1500}
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools
          </Link>
      <Link to="applications"
        spy={true}
        smooth={"easeOutCubic"}
        duration={2000}
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications
          </Link>
    </>
  )
}

function ToolsOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li id="Tools" className={`welcome-page-option tools ${showing} selected`} onClick={props.toggleList}>Tools</li>
      <Link to="about-me"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1000}
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me
        </Link>
      <Link to="skills"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1500}
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills
          </Link>
      <Link to="applications"
        spy={true}
        smooth={"easeOutCubic"}
        duration={2000}
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications
          </Link>
    </>
  )
}

function ApplicationsOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li id="Applications" className={`welcome-page-option applications ${showing} selected`} onClick={props.toggleList}>Applications</li>
      <Link to="about-me"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1000}
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me
        </Link>
      <Link to="skills"
        spy={true}
        smooth={"easeOutCubic"}
        duration={1500}
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills
          </Link>
      <Link to="tools"
        spy={true}
        smooth={"easeOutCubic"}
        duration={2000}
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools
          </Link>
    </>
  )
}
