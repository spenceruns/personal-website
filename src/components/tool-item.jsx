import React from 'react'

 const ToolItem = props => {
  let icon = null
  switch(props.tool) {
    case "AWS":
      icon = "devicon-amazonwebservices-original";
      break;
    case "Babel":
      icon = "devicon-babel-plain";
      break;
    case "Chrome DevTools":
      icon = "devicons devicons-chrome"
      break
    case "Docker":
      icon = "devicon-docker-plain"
      break
    case "Figma":
      icon = "fab fa-figma";
      break;
    case "Font Awesome":
      icon = "fab fa-font-awesome"
      break
    case "Photoshop":
      icon = "devicon-photoshop-line"
      break
    case "Slack":
      icon = "devicon-slack-plain"
      break
    case "VS Code":
      icon = "devicons devicons-visualstudio"
      break
    case "webpack":
      icon = "devicon-webpack-plain"
      break
    default:
      icon = `devicons devicons-${props.tool.toLowerCase().replace(" ", "-")}`
  }
  return (
    <div className="tool-icon-container">
      <i className={`${icon} tool-icon`}></i>
      <div className="tool-name">{props.tool}</div>
    </div>
  )
}

export default ToolItem
