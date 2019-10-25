// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'

// src
import { Form } from './Form'
import { Title } from '../Title'
import { useStyles } from './PageBirthday.styles'

export const PageBirthday = () => {
  const styles = useStyles()

  return (
    <Grid container className={styles.root}>
      <Grid item className={styles.titleContainer} xs={11} sm={11} md={11}>
        <Title className={styles.title}>
          <span role="img" aria-label="emoji">Happy Birthday to you Fizza &#129299;</span>
        </Title>
      </Grid>
      <Grid item xs={11} sm={8} md={8}>
        <Form />
      </Grid>
    </Grid>
  )
}
