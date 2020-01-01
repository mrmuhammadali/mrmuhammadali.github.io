// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './Profile.styles'

export const Profile = () => {
  const styles = useStyles()

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={4} sm={3} md={2}>
        <img
          className={styles.profilePic}
          alt="Muhammad Ali"
          src="./images/profile.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Typography className={styles.description} color="textSecondary">
          I believe programmers express themselves with the code they write and
          the way they write it, you just have to know what to look for. You can
          distinct 100 people solving same problem with the code they write and
          that goes for chinese people as well{' '}
          <span role="img" aria-label="">
            😁
          </span>
          . I love programming because you can wake up everyday with a fresh and
          unique challenge on your to-do list! To top it off, you can make
          solution as much creative and elegant as you want. That feeling of
          distinction and satisfaction you get when you write a unique and
          elegant solution for a problem, i am lost for words to describe it but
          you would understand if you are a programmer!
        </Typography>
      </Grid>
    </Grid>
  )
}
