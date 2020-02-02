import React from 'react'
import NavBar from './header'
import WelcomePage from './welcome-page'
import AboutMePage from './about-me-page'

function App(props) {
  return (
    <>
      <WelcomePage />
      <div className="break"></div>
      <AboutMePage />
    </>
  )
}

export default App
