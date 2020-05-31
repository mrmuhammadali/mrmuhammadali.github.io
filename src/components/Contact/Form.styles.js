// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'grid',
    gap: '2px',
    gridTemplateColumns: '1fr auto',
  },

  input: {
    gridColumn: '1 / span 2',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    fontFamily: "'Titillium Web', sans-serif",
    fontWeight: 300,
    background: palette.primary.main,
    color: palette.text.primary,
    fontSize: '16px',
    padding: '10px',
    resize: 'none',
  },

  align: {
    alignSelf: 'center',
    color: ({ status }) => {
      switch (status) {
        case 'ERROR':
          return palette.error.main
        case 'SUCCESS':
          return palette.success.main
        default:
          return palette.text.secondary
      }
    },
  },

  submit: {
    gridColumn: 2,
    background: palette.text.hint,
    color: '#fff',
    fontSize: '18px',
    marginTop: '5px',
    textTransform: 'none',
    transition: 'background 0.2s linear, color 0.2s linear',
    width: '14rem',
    justifySelf: 'end',

    '&:hover': {
      background: palette.primary.main,
      color: palette.text.primary,
    },
  },
}))
