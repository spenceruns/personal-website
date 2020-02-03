import React from 'react'
import AOS from 'aos'
import AppItem from './app-item'

export default class AppPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apps: [
        {
          id: 1,
          name: "Memory Match",
          description: "A lo-fi hip-hop music-themed memory match game that dynamically creates a song as you play.",
          logo: "./images/mm-logo.png",
          preview: "./images/mm-preview.gif",
          url: "https://lo-fi.spenceruns.com/",
          github: "https://github.com/spenceruns/memory-match",
          figma: null
        },
        {
          id: 2,
          name: "Wicked Vinyl",
          description: "A full stack mock e-commerce site that showcases a personal selection of vinyl, turntables and music accessories.",
          logo: "./images/wv-logo.png",
          preview: "./images/wv-preview.gif",
          url: "https://wicked-vinyl.spenceruns.com/",
          github: "https://github.com/spenceruns/wicked-vinyl",
          figma: null
        },
        {
          id: 3,
          name: "ShadowRealmer.com",
          description: "A full stack web app for trading card enthusiasts to find store events and meet up with other users to play together.",
          logo: "./images/sr-logo.png",
          preview: "./images/sr-preview.gif",
          url: "https://shadowrealmer.com/",
          github: "https://github.com/AndrewLo42/shadow-realmer",
          figma: "https://www.figma.com/file/E7zFjWjORH7H9go1E1wFjX/ShadowRealmer.com?node-id=0%3A1"
        }
      ],
      whichApp: null
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen(id) {
    id === this.state.whichApp
    ? this.setState({ whichApp: null })
    : this.setState({ whichApp: id })
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="app-page-container"
        data-aos="fade-bottom"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-anchor=".tools-page-container"
        data-aos-anchor-placement="center-center"
        data-aos-duration="50">
        <h1 className="apps-title"><span className="tags">{"<"}</span>h1<span className="tags">{">"}</span>Applications<span className="tags">{"</"}</span>h1<span className="tags">{">"}</span></h1>
        <div className="apps-container">
          {this.state.apps.map(app =>
            <AppItem key={app.id}
            app={app}
            whichApp={this.state.whichApp}
            open={this.toggleOpen} />)}
        </div>
      </div>
    )
  }
}
