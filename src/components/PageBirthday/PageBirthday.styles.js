// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      margin: 0,
      fontFamily: "'Titillium Web', sans-serif",
      background: theme.palette.secondary.main,
    },
  },

  '@keyframes blinker': {
    to: {
      opacity: 0,
    },
  },

  root: {
    justifyContent: 'center',
  },

  titleContainer: {
    minHeight: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    animation: '$blinker 1s cubic-bezier(.5, 0, 1, 1) infinite alternate',
  },
}))
