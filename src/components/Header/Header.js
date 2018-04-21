// libs
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

// src
import styles from './Header.css'

const buttons = ['About', 'Portfolio', 'Contact']

export default ({ onNavButtonClick }) => (
  <AppBar className={styles.root} position="sticky" color="default">
    <Toolbar>
      <Typography className={styles.logo} variant="title" color="inherit">
        Muhammad Ali
      </Typography>
      {buttons.map((title, index) => (
        <Button
          key={title}
          color="inherit"
          onClick={onNavButtonClick.bind(null, index)}
        >
          {title}
        </Button>
      ))}
    </Toolbar>
  </AppBar>
)
