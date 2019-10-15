// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

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
    background: '#3c3f45',
    color: '#83868c',
    fontSize: '18px',
    marginTop: '5px',
    textTransform: 'none',
    transition: 'background 0.2s linear, color 0.2s linear',
    width: '14rem',
    justifySelf: 'end',

    '&:hover': {
      background: '#de5e60',
      color: '#ffffff',
    },
  },
}))
