// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    padding: '1rem 0',
  },

  profilePic: {
    color: theme.palette.text.primary,
    marginTop: 6,
  },

  textPrimary: {
    color: theme.palette.text.primary,
  },

  description: {
    fontWeight: 300,
    lineHeight: '28px',
    fontSize: '1.1em',
    margin: 0,
    textAlign: 'left',
  },
}))
