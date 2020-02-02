import React from 'react'
import NavBar from './header'
import WelcomePage from './welcome-page'
import AboutMePage from './about-me-page'
import SkillsPage from './skill-page'

function App(props) {
  return (
    <>
      <WelcomePage />
      <SkillsPage />
      <div className="break"></div>
      <AboutMePage />
      <div className="break" id="skills"></div>
      <SkillsPage />
    </>
  )
}

export default App
