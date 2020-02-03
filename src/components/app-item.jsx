import React from 'react'

export default function AppItem(props) {
  let openState = null
  let hidden = null
  let move = null
  if (props.whichApp === props.app.id) {
    openState = "opened"
  } else if (props.whichApp !== null) {
    openState = "squished"
    hidden = "hidden"
    move = "move-logo"
  }
  return (
    <div className={`app ${openState}`}
    onClick={() => props.open(props.app.id)}>
      <img className={`app-logo ${move}`} src={props.app.logo} alt={props.app.name}/>
      <div className={`app-name ${hidden}`}>{props.app.name}</div>
      <p className={`app-description ${hidden}`}>{props.app.description}</p>
    </div>
  )
}
