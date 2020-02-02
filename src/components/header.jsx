import React from 'react'

export default function NavBar(props) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-name">Spencer Allen</div>
        <ul className="navbar-options">
          <li className="navbar-option">About Me</li>
          <li className="navbar-option">Skills</li>
          <li className="navbar-option">Tools</li>
          <li className="navbar-option">Applications</li>
        </ul>
      </div>
    </header>
  )
}
