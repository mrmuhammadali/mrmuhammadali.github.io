// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    padding: '1rem 0',
  },

  profilePic: {
    width: '100%',
    color: theme.palette.text.primary,
    marginTop: 6,
  },

  description: {
    fontWeight: 300,
    lineHeight: '28px',
    fontSize: '1.1em',
    margin: 0,
    textAlign: 'left',
  },
}))
