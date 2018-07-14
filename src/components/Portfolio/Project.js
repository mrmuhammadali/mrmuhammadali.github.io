// libs
import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  image: {
    position: 'relative',
    height: 200,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.3
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    width: '100%',
    height: '100%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
})

export default withStyles(styles)(props => {
  const { classes, project, onProjectClick } = props
  const { thumbnail, title } = project

  return (
    <ButtonBase focusRipple className={classes.image} onClick={onProjectClick}>
      <img className={classes.imageSrc} alt={title} src={thumbnail} />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subheading"
          color="inherit"
          className={classes.imageTitle}
        >
          {title}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  )
})
