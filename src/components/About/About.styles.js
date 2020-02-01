// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.secondary.main,
  },

  header: {
    margin: '2rem 0',
  },

  logo: {
    width: '5rem',
  },

  tagline: {
    fontSize: '24px',
    fontWeight: 200,
    margin: 0,
  },
}))
