// libs
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

// src
import styles from './Header.css'

const buttons = ['About', 'Portfolio', 'Contact']

export default ({ onNavButtonClick }) => (
  <AppBar className={styles.root} position="sticky" color="default">
    <Toolbar>
      <h2 className={styles.logo} variant="title" color="inherit">
        Muhammad Ali
      </h2>
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
