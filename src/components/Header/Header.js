// @flow
// libs
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

// src
import styles from './Header.css'

type Props = {
  windowWidth: number,
  onNavButtonClick: number => void
}

const buttons = ['About', 'Portfolio', 'Contact']

export default ({ windowWidth, onNavButtonClick }: Props) => {
  const isMobile = windowWidth < 600
  const size = isMobile ? 'small' : 'medium'

  return (
    <AppBar className={styles.root} position="sticky" color="default">
      <Toolbar>
        <h2
          className={[styles.logo, isMobile && styles.mobileLogo].join(' ')}
          variant="title"
          color="inherit"
        >
          Muhammad Ali
        </h2>
        {buttons.map((title, index) => (
          <Button
            key={title}
            size={size}
            color="inherit"
            onClick={() => onNavButtonClick(index)}
          >
            {title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}
