// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
  },

  content: {
    justifyContent: 'center',
  },

  heading: {
    fontSize: '24px',
    lineHeight: '1.5em',
    fontWeight: 300,
    margin: 0,
  },
}))
