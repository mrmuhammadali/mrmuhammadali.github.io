// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles(({ palette }) => ({
  "@global": {
    html: {
      "scroll-behavior": "smooth",
    },

    body: {
      margin: 0,
      fontFamily: "'Titillium Web', sans-serif",
      fontDisplay: "swap",
      background: palette.secondary.main,
    },

    section: {
      padding: "20px 8px",
    },

    a: {
      color: palette.text.hint,
      textDecoration: "none",
      transition: "color 0.1s linear 0s",

      "&:hover": {
        color: palette.text.primary,
      },
    },
  },
}));
