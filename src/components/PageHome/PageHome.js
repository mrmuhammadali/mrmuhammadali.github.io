// libs
import React from 'react'
import scrollToComponent from 'react-scroll-to-component'

// src
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Header from '../Header'
import Portfolio from '../Portfolio'
import styles from './PageHome.module.css'

export default class PageHome extends React.Component {
  state = { windowWidth: window.innerWidth }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, true)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, true)
  }

  handleResize = () => {
    this.setState(() => ({ windowWidth: window.innerWidth }))
  }

  handleNavButtonClick = index => {
    scrollToComponent(this.sectionRefs[index], {
      offset: -70,
      align: 'top',
      duration: 300,
    })
  }

  setSectionRef = ref => {
    this.sectionRefs = [...this.sectionRefs, ref]
  }

  sectionRefs = []

  render() {
    const { windowWidth } = this.state

    return (
      <div className={styles.root}>
        <Header
          windowWidth={windowWidth}
          onNavButtonClick={this.handleNavButtonClick}
        />
        <About setSectionRef={this.setSectionRef} />
        <Portfolio setSectionRef={this.setSectionRef} />
        <Contact setSectionRef={this.setSectionRef} />
        <Footer />
      </div>
    )
  }
}
