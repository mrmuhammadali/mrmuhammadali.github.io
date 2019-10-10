// libs
import React, { useRef } from 'react'
import scrollToComponent from 'react-scroll-to-component'

// src
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Header from '../Header'
import Portfolio from '../Portfolio'
import styles from './PageHome.module.css'

export default function PageHome() {
  const about = useRef(null)
  const contact = useRef(null)
  const portfolio = useRef(null)

  const handleNavButtonClick = section => {
    const scroll = ref =>
      scrollToComponent(ref, { offset: -70, align: 'top', duration: 300 })

    switch (section) {
      case 'about':
        return scroll(about.current)
      case 'contact':
        return scroll(contact.current)
      default:
        return scroll(portfolio.current)
    }
  }

  return (
    <div className={styles.root}>
      <Header onNavButtonClick={handleNavButtonClick} />
      <About ref={about} />
      <Portfolio ref={portfolio} />
      <Contact ref={contact} />
      <Footer />
    </div>
  )
}
