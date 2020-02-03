import React from 'react'

export default function AppItem(props) {
  let openState = null
  let moveLogo = null
  let moveName = null
  let preview = "hidden"
  let moveDesc = null
  let links = "hide-links"
  if (props.whichApp === props.app.id) {
    openState = "opened"
    moveLogo = "move-logo-opened"
    moveName = "move-name-opened"
    preview = null
    moveDesc = "move-desc-opened"
    links = null
  } else if (props.whichApp !== null) {
    openState = "squished"
    moveLogo = "move-logo-down"
    moveName = "hidden"
    moveDesc = "hidden"
  }
  const figma = !props.app.figma && "hidden"
  return (
    <div className={`app ${openState}`}
    onClick={() => props.open(props.app.id)}>
      <img className={`app-logo ${moveLogo}`} src={props.app.logo} alt={props.app.name}/>
      <div className={`app-name ${moveName}`}>{props.app.name}</div>
        <img className={`app-preview ${preview}`} src={props.app.preview} alt={`${props.app.name} preview`}/>
        <div className={`desc-right ${moveDesc}`}>
          <p className={`app-description ${moveDesc}`}>{props.app.description}</p>
          <div className={`app-links ${links}`}>
            <a href={props.app.url} className="app-link" target="_blank">Live</a>
            <a href={props.app.github} className="app-link" target="_blank">Github</a>
            <a href={props.app.figma} className={`app-link ${figma}`} target="_blank">Figma</a>
          </div>
        </div>
    </div>
  )
}
