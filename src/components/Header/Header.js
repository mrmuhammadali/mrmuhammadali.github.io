// @flow
// libs
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// src
import { useStyles } from './Header.styles'

type Props = {
  onNavButtonClick: (number) => void,
}

const BUTTONS = ['About', 'Portfolio', 'Contact']

export const Header = ({ onNavButtonClick }: Props) => {
  const styles = useStyles({})
  const matches = useMediaQuery((theme) => theme.breakpoints.down('xs'))

  return (
    <AppBar className={styles.root} position="sticky">
      <Toolbar variant="dense">
        <h2 className={styles.logo} variant="title" color="inherit">
          Muhammad Ali
        </h2>
        {BUTTONS.map((title) => (
          <Button
            key={title}
            size={matches ? 'small' : 'medium'}
            color="inherit"
            onClick={() => onNavButtonClick(title.toLowerCase())}
          >
            {title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}
