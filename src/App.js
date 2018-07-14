// libs
import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import scrollToComponent from 'react-scroll-to-component'

// src
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import styles from './App.css'

const theme = createMuiTheme({ palette: { type: 'dark' } })

export default class App extends React.Component {
  handleNavButtonClick = index => {
    scrollToComponent(this.sectionRefs[index], {
      offset: -70,
      align: 'top',
      duration: 300
    })
  }

  setSectionRef = ref => {
    this.sectionRefs.push(ref)
  }

  sectionRefs = []

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.root}>
          <Header onNavButtonClick={this.handleNavButtonClick} />
          <About setSectionRef={this.setSectionRef} />
          <Portfolio setSectionRef={this.setSectionRef} />
          <Contact setSectionRef={this.setSectionRef} />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
