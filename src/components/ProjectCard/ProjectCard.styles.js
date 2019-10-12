// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345,
    // margin: theme.spacing(2),
  },
  media: {
    position: 'relative',
    height: 190,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
}))
