// libs
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.colors.primaryBackground,
  },

  logo: {
    flex: 1,
    fontWeight: 400,
    margin: 0,
  },

  mobileLogo: {
    fontWeight: 300,
    fontSize: '1em',
  },
}))
