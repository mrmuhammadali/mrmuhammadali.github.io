// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: 0,
      fontFamily: "'Titillium Web', sans-serif",
      fontDisplay: "swap",
      background: theme.palette.secondary.main,
    },

    section: {
      padding: "20px 8px",
    },

    a: {
      color: theme.palette.text.hint,
      textDecoration: "none",
      transition: "color 0.1s linear 0s",

      "&:hover": {
        color: theme.palette.text.primary,
      },
    },
  },
}));
