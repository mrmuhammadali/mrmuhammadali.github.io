// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
  },
  media: {
    position: 'relative',
    height: 190,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
  },
  loading: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
}))
