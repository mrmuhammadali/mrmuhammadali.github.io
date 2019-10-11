// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

// src
import styles from './Detail.module.css'

export default () => (
  <Grid container spacing={2} className={styles.root}>
    <Grid item xs={6} sm={4} md={3} className={styles.item}>
      <Icon className={styles.icon}>chrome_reader_mode</Icon>
      <h3 className={styles.title}>Education</h3>
      <h4 className={styles.subtitle}>BS in Software Engineering</h4>
      <p className={styles.content}>
        COMSATS Institute of Information Technology,
        <br /> Islamabad, Pakistan
        <br />
        February 2013 - January 2017
      </p>
    </Grid>
    <Grid item xs={6} sm={4} md={3} className={styles.item}>
      <Icon className={styles.icon}>business_center</Icon>
      <h3 className={styles.title}>Experience</h3>
      <h4 className={styles.subtitle}>eMumba</h4>
      <p className={styles.content}>June 2017 - Present</p>
      <h4 className={styles.subtitle}>Freelancer</h4>
      <p className={styles.content}>
        Active Time: 6 Months
      </p>
    </Grid>
    <Grid item xs={8} sm={4} md={3} className={styles.item}>
      <Icon className={styles.icon}>lightbulb_outline</Icon>
      <h3 className={styles.title}>Technical Skills</h3>
      <h4 className={styles.subtitle}>Tools and Technologies</h4>
      <p className={styles.content}>
        Alexa Skills, D3.js,
        ExpressJS, Javascript, Jest, MongoDB, NodeJS, React, React Native,
        Redux, REST APIs, SQL, NoSQL
      </p>
    </Grid>
  </Grid>
)
