import React, { useState } from 'react'

export default function SkillItem(props) {
  const [clicked, setClicked] = useState(false)
  const spin = clicked ? "spin" : ""
  let icon = null
  switch (props.skill) {
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
      icon = `devicons devicons-${props.skill.toLowerCase()}`
  }
  return (
    <div className="skills-icon-container"
      onClick={() => {
        setClicked(true)
        setTimeout(() => setClicked(false), 750)
      }}>
      <i className={`${icon} skills-icon ${spin}`}></i>
      <div className="skills-name">{props.skill}</div>
    </div>
  )
}
