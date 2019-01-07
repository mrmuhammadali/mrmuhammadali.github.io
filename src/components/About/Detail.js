// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

// src
import styles from './Detail.css'

export default () => (
  <Grid container spacing={24} className={styles.root}>
    <Grid item xs={6} sm={4} md={3}>
      <Icon className={styles.sectionIcon}>chrome_reader_mode</Icon>
      <h2 className={styles.sectionTitle}>Education</h2>
      <h4 className={styles.itemHeading}>BS in Software Engineering</h4>
      <p className={styles.itemContent}>
        COMSATS Institute of Information Technology,
        <br /> Islamabad, Pakistan
        <br />
        February 2013 - January 2017
      </p>
    </Grid>
    <Grid item xs={6} sm={4} md={3}>
      <Icon className={styles.sectionIcon}>business_center</Icon>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <h4 className={styles.itemHeading}>eMumba</h4>
      <p className={styles.itemContent}>June 2017 - Present</p>
      <h4 className={styles.itemHeading}>Freelancer</h4>
      <p className={styles.itemContent}>
        Fiverr.com <br /> Active Time: 6 Months <br />{' '}
        <a
          className={styles.link}
          href="https://www.fiverr.com/users/ma_webminister/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Profile
        </a>
      </p>
    </Grid>
    <Grid item xs={8} sm={4} md={3}>
      <Icon className={styles.sectionIcon}>lightbulb_outline</Icon>
      <h2 className={styles.sectionTitle}>Technical Skills</h2>
      <h4 className={styles.itemHeading}>Tools and Technologies</h4>
      <p className={styles.itemContent}>
        <span className={styles.focus}>Comfortable:</span> Alexa Skills, D3.js,
        ExpressJS, Java, Javascript, Jest, MongoDB, NodeJS, React, React Native,
        Redux, REST APIs, SQL
      </p>
      <p className={styles.itemContent}>
        <span className={styles.focus}>Familiar:</span> Django, Golang,
        Photoshop, Python, Shopify, Spring
      </p>
    </Grid>
  </Grid>
)
