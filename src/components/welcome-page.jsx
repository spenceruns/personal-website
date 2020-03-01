import React, { useState } from 'react'

export default function WelcomePage(props) {
  const [listView, setListView] = useState(false)
  const [viewOption, setViewOption] = useState(null)
  const showing = listView ? "options-show" : ""
  let view = null
  switch (viewOption) {
    case "About Me":
      view = <AboutMeOption showList={listView} toggleList={() => {
        setListView(!listView)
        setViewOption(event.target.id)
      }} />
      break
    case "Skills":
      view = <SkillsOption showList={listView} toggleList={() => {
        setListView(!listView)
        setViewOption(event.target.id)
      }} />
      break
    case "Tools":
      view = <ToolsOption showList={listView} toggleList={() => {
        setListView(!listView)
        setViewOption(event.target.id)
      }} />
      break
    case "Applications":
      view = <ApplicationsOption showList={listView} toggleList={() => {
        setListView(!listView)
        setViewOption(event.target.id)
      }} />
      break
    default:
      view = <NoOption showList={listView} toggleList={() => {
        setListView(!listView)
        setViewOption(event.target.id)
      }} />
  }
  return (
    <div className="welcome-page-container">
      <div className="welcome-message"><div className="welcome-tag"><span className="tags">{"<"}</span>div<span className="tags">{">"}</span></div>Hi,  My name is Spencer! Check out my&nbsp;
          <ul className="welcome-page-options">
          { view }
        </ul>
        <div className="welcome-tag"><span className="tags">{"</"}</span>div<span className="tags">{">"}</span></div>
      </div>
    </div>
  )
}

function NoOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li className={`welcome-page-option ${showing} selected`} onClick={props.toggleList} style={{ color: '#393e46'}}>Awesome Stuff!</li>
      <a href="#about-me"
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me</a>
      <a href="#skills"
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills</a>
      <a href="#tools"
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools</a>
      <a href="#applications"
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications</a>
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
      <a href="#skills"
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills</a>
      <a href="#tools"
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools</a>
      <a href="#applications"
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications</a>
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
      <a href="#about-me"
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me</a>
      <a href="#tools"
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools</a>
      <a href="#applications"
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications</a>
    </>
  )
}

function ToolsOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li id="Tools" className={`welcome-page-option tools ${showing} selected`} onClick={props.toggleList}>Tools</li>
      <a href="#about-me"
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me</a>
      <a href="#skills"
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills</a>
      <a href="#applications"
        id="Applications"
        className={`welcome-page-option applications ${showing}`}
        onClick={props.toggleList}>
        Applications</a>
    </>
  )
}

function ApplicationsOption(props) {
  const showing = props.showList && "options-show"
  return (
    <>
      <li id="Applications" className={`welcome-page-option applications ${showing} selected`} onClick={props.toggleList}>Applications</li>
      <a href="#about-me"
        id="About Me"
        className={`welcome-page-option about-me ${showing}`}
        onClick={props.toggleList}>
        About Me</a>
      <a href="#skills"
        id="Skills"
        className={`welcome-page-option skills ${showing}`}
        onClick={props.toggleList}>
        Skills</a>
      <a href="#tools"
        id="Tools"
        className={`welcome-page-option tools ${showing}`}
        onClick={props.toggleList}>
        Tools</a>
    </>
  )
}
