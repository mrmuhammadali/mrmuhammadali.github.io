// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      margin: 0,
      fontFamily: "'Titillium Web', sans-serif",
      background: theme.palette.secondary.main,
    },

    section: {
      padding: '16px 8px',
    },

    a: {
      color: '#de5e60',
      textDecoration: 'none',
      transition: 'color 0.1s linear 0s',

      '&:hover': {
        color: theme.palette.text.primary,
      },
    },
  },
}))
