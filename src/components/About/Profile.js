// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'

// src
import styles from './Profile.module.css'

export default () => (
  <Grid container spacing={2} className={styles.root}>
    <Grid item xs={5} sm={4} md={2}>
      <img
        className={styles.profilePic}
        alt="Muhammad Ali"
        src="./images/profile.jpg"
      />
    </Grid>
    <Grid item xs={12} sm={8} md={7}>
      <p className={styles.description}>
        <span className={styles.focus}>I prefer tabs over spaces,</span>{' '}
        camelCase over _underscores, unix over windows, long work sessions over
        short sprints, git over svn, vim over emacs, IntelliJ over eclipse, In
        short, "I am a Programmer and i am proud of it". I believe programmers
        express themselves with the code they write and the way they write it,
        you just have to know what to look for. You can distinct 100 people
        solving same problem with the code they write and that goes for chinese
        people as well 😁. I love programming because you can wake up everyday
        with a fresh and unique challenge on your to-do list! To top it off, you
        can make solution as much creative and elegant as you want. That feeling
        of distinction and satisfaction you get when you write a unique and
        elegant solution for a problem, i am lost for words to describe it but
        you would understand if you are a programmer!
      </p>
    </Grid>
  </Grid>
)
