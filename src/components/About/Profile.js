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
          src="/images/profile.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Typography className={styles.description} color="textSecondary">
          I was into computers since I was in high school as I used to play
          video games on it. I thought some day I’ll create one of these cool
          games myself but it turned out I’m aligning some “Submit” button to
          the right of a form.{' '}
          <span role="img" aria-label="">
            😔
          </span>{' '}
          Still, I think I’m a natural programmer.{' '}
          <span role="img" aria-label="">
            😎
          </span>
          I don’t want to brag about it but I think I’m doing a great job in it.
          Whenever I get some problem, I’m always, literally always, thinking
          about the solution. Recently I had a dream about merging two arrays
          without using a third one and I’m not kidding.{' '}
          <span role="img" aria-label="">
            🤐
          </span>{' '}
          Moreover, I can’t stand code smell. Whenever I write or see some hacks
          in project which I’m working on I get horrible nightmares.{' '}
          <span role="img" aria-label="">
            😢
          </span>{' '}
          My motto is that{' '}
          <Typography color="textPrimary">
            Always code as if the guy who ends up maintaining your code will be
            a violent psychopath who knows where you live.
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}
