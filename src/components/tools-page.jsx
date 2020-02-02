import React from 'react'
import ToolItem from './tool-item';

export default function ToolsPage(props) {
  const tools = [
    "AWS",
    "Babel",
    "BootStrap",
    "Chrome DevTools",
    "Docker",
    "Figma",
    "Font Awesome",
    "Git",
    "Github",
    "NGINX",
    "npm",
    "Photoshop",
    "Slack",
    "ubuntu",
    "VS Code",
    "webpack"
  ]
  return (
    <div className="tools-page-container" id="tools">
      <h1 className="tools-title"><span className="tags">{"<"}</span>h1<span className="tags">{">"}</span>Tools<span className="tags">{"</"}</span>h1<span className="tags">{">"}</span></h1>
      <div className="tools-page-icons-container">
        {tools.map(tool =>
          <ToolItem key={tool} tool={tool} />)}
      </div>
    </div>
  )
}
