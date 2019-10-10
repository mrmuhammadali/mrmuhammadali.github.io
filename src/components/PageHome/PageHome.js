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
    return (
      <div className={styles.root}>
        <Header onNavButtonClick={this.handleNavButtonClick} />
        <About ref={this.setSectionRef} />
        <Portfolio ref={this.setSectionRef} />
        <Contact ref={this.setSectionRef} />
        <Footer />
      </div>
    )
  }
}
