// libs
import React, { forwardRef } from 'react'
import Typography from '@material-ui/core/Typography'

// src
import Detail from './Detail'
import Profile from './Profile'
import { useStyles } from './About.styles'

export const About = forwardRef((_, ref) => {
  const styles = useStyles()

  return (
    <section className={styles.root} ref={ref}>
      <img className={styles.logo} alt="Muhammad Ali" src="./ma.png" />
      <Typography className={styles.tagline} component="h3" color="textPrimary">
        Fullstack developer aiming to build a brand.
      </Typography>
      <Profile />
      <Detail />
    </section>
  )
})
