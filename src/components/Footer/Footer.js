// libs
import React from 'react'

// src
import styles from './Footer.css'

export default () => (
  <footer className={styles.root}>
    <p className={styles.inner}>
      ©2018 &diams;{' '}
      <a
        className={styles.link}
        href="http://muhammadali.io/"
        title="Muhammad Ali"
      >
        Muhammad Ali
      </a>{' '}
      &diams; All rights reserved.
    </p>
  </footer>
)
