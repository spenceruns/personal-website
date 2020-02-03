import React from 'react'
import WelcomePage from './welcome-page'
import AboutMePage from './about-me-page'
import SkillsPage from './skills-page'
import ToolsPage from './tools-page'
import AppPage from './app-page'

export default function App(props) {
  return (
    <>
      <WelcomePage />
      <div className="break"></div>
      <AboutMePage />
      <div className="break" id="skills"></div>
      <SkillsPage />
      <ToolsPage />
      <div className="break" id="applications"></div>
      <AppPage />
    </>
  )
}
