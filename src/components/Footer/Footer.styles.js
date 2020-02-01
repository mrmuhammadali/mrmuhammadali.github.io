// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'auto',
    background: theme.palette.primary.main,
    textAlign: 'center',
  },

  text: {
    color: theme.palette.text.primary,
    fontSize: '13px',
    padding: '20px 0',
    textTransform: 'uppercase',
  },
}))
