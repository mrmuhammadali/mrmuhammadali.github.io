// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
  },

  media: {
    position: 'relative',
    height: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,

    '& p': {
      fontSize: '1.5rem',
    },
  },

  loading: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },

  content: {
    paddingBottom: 0,
  },

  actions: {
    padding: '8px 16px',
    display: 'inline-grid',
    gridColumnGap: '10px',
  },
}))
