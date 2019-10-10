// libs
import React from 'react'

// src
import Detail from './Detail'
import Profile from './Profile'
import styles from './About.module.css'

export default ({ setSectionRef }) => (
  <section className={styles.root} ref={setSectionRef}>
    <header className={styles.header}>
      <img className={styles.logo} alt="Muhammad Ali" src="./ma.png" />
      <h3 className={styles.tagline}>
        Fullstack developer aiming to build a brand.
      </h3>
    </header>
    <Profile />
    <Detail />
  </section>
)
