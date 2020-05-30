// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
  },

  media: {
    position: 'relative',
    height: 220,
    display: 'grid',
    alignContent: 'center',
    textAlign: 'center',
    background: theme.palette.primary.main,

    '& p': {
      fontSize: '1.5rem',
    },
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
