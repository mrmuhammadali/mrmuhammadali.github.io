// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gap: '2px',
  },

  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    fontFamily: "'Titillium Web', sans-serif",
    fontWeight: 300,
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    fontSize: '16px',
    padding: '10px',
    resize: 'none',
  },

  submit: {
    background: theme.palette.text.hint,
    color: '#fff',
    fontSize: '18px',
    marginTop: '5px',
    textTransform: 'none',
    transition: 'background 0.2s linear, color 0.2s linear',
    width: '14rem',
    justifySelf: 'end',

    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
  },
}))
