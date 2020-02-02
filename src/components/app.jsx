import React from 'react'
import WelcomePage from './welcome-page'
import AboutMePage from './about-me-page'
import SkillsPage from './skill-page'

export default function App(props) {
  const laoding = document.readyState
  console.log(laoding)
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
