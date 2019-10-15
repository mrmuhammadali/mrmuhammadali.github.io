// libs
import React, { useRef } from 'react'
import scrollToComponent from 'react-scroll-to-component'

// src
import { About } from '../About'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Portfolio } from '../Portfolio'
import { useStyles } from './PageHome.styles'

export default function PageHome() {
  const styles = useStyles()
  const about = useRef(null)
  const contact = useRef(null)
  const portfolio = useRef(null)

  const handleNavButtonClick = section => {
    const scroll = ref =>
      scrollToComponent(ref.current, {
        offset: -50,
        align: 'top',
        duration: 300,
      })

    if (section === 'about') {
      scroll(about)
    } else if (section === 'contact') {
      scroll(contact)
    } else {
      scroll(portfolio)
    }
  }

  return (
    <React.Fragment>
      <Header className={styles.header} onNavButtonClick={handleNavButtonClick} />
      <About ref={about} />
      <Portfolio ref={portfolio} />
      <Contact ref={contact} />
      <Footer />
    </React.Fragment>
  )
}
