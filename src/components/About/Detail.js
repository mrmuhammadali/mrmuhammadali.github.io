// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './Detail.styles'

export default () => {
  const styles = useStyles()

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={6} sm={4} md={3} className={styles.item}>
        <Icon className={styles.icon}>chrome_reader_mode</Icon>
        <Typography className={styles.title} color="textPrimary" component="h3">
          Education
        </Typography>
        <Typography
          className={styles.subtitle}
          color="textPrimary"
          component="h4"
        >
          BS in Software Engineering
        </Typography>
        <Typography className={styles.content} color="textSecondary">
          COMSATS Institute of Information Technology,
          <br /> Islamabad, Pakistan
          <br />
          February 2013 - January 2017
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4} md={3} className={styles.item}>
        <Icon className={styles.icon}>business_center</Icon>
        <Typography className={styles.title} color="textPrimary" component="h3">
          Experience
        </Typography>
        <Typography
          className={styles.subtitle}
          color="textPrimary"
          component="h4"
        >
          eMumba
        </Typography>
        <Typography className={styles.content} color="textSecondary">
          June 2017 - Present
        </Typography>
        <Typography
          className={styles.subtitle}
          color="textPrimary"
          component="h4"
        >
          Freelancer
        </Typography>
        <Typography className={styles.content} color="textSecondary">
          Active Time: 6 Months
        </Typography>
      </Grid>
      <Grid item xs={8} sm={4} md={3} className={styles.item}>
        <Icon className={styles.icon}>lightbulb_outline</Icon>
        <Typography className={styles.title} color="textPrimary" component="h3">
          Technical Skills
        </Typography>
        <Typography
          className={styles.subtitle}
          color="textPrimary"
          component="h4"
        >
          Tools and Technologies
        </Typography>
        <Typography className={styles.content} color="textSecondary">
          Alexa Skills, D3.js, ExpressJS, Javascript, Jest, MongoDB, NodeJS,
          React, React Native, Redux, REST APIs, SQL, NoSQL
        </Typography>
      </Grid>
    </Grid>
  )
}
