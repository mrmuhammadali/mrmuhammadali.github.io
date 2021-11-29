// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: palette.secondary.main,
  },

  title: {
    fontSize: "32px",
    fontWeight: 300,
    margin: 0,
  },

  tagline: {
    fontSize: "20px",
    fontWeight: 200,
    margin: 0,
  },

  social: {
    display: "flex",
  },

  socialIcon: {
    fill: palette.text.secondary,
    width: "20px",
  },
}));
