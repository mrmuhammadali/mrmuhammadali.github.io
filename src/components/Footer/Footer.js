// libs
import React from 'react'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './Footer.styles'

export const Footer = () => {
  const styles = useStyles()

  return (
    <footer className={styles.root}>
      <Typography className={styles.text}>
        ©2019 &diams; All rights reserved.
      </Typography>
    </footer>
  )
}
