// libs
import React, { forwardRef } from 'react'

// src
import Detail from './Detail'
import Profile from './Profile'
import styles from './About.module.css'

const About = forwardRef((_, ref) => (
  <section className={styles.root} ref={ref}>
    <header className={styles.header}>
      <img className={styles.logo} alt="Muhammad Ali" src="./ma.png" />
      <h3 className={styles.tagline}>
        Fullstack developer aiming to build a brand.
      </h3>
    </header>
    <Profile />
    <Detail />
  </section>
))

export default About
