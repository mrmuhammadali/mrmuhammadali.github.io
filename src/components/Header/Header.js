// @flow
// libs
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

// src
import { useStyles } from './Header.styles'
import useResize from '../../utils/useResize'

type Props = {
  onNavButtonClick: number => void,
}

const buttons = ['About', 'Portfolio', 'Contact']

export default ({ onNavButtonClick }: Props) => {
  const styles = useStyles({})
  const [, windowWidth] = useResize()
  const isMobile = windowWidth < 600
  const size = isMobile ? 'small' : 'medium'

  return (
    <AppBar className={styles.root} position="sticky" color="default">
      <Toolbar variant="dense">
        <h2
          className={[styles.logo, isMobile && styles.mobileLogo].join(' ')}
          variant="title"
          color="inherit"
        >
          Muhammad Ali
        </h2>
        {buttons.map(title => (
          <Button
            key={title}
            size={size}
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
