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

  content: {
    paddingBottom: 0,
  },

  actions: {
    padding: '8px 16px',
  },

  icon: {
    fill: theme.palette.text.hint,
    width: '18px',

    '&:hover': {
      fill: theme.palette.text.primary,
    },
  },

  link: {
    // color: theme.palette.text.hint,
  },
}))
