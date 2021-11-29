// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    background: palette.secondary.main,
  },

  media: {
    position: "relative",
    height: 220,
    width: "100%",
    display: "grid",
    alignContent: "center",
    textAlign: "center",
    background: palette.primary.main,

    "& p": {
      fontSize: "1.5rem",
    },
  },

  content: {
    paddingBottom: 0,
  },

  icon: {
    fill: palette.text.secondary,
    width: "18px",
  },
}));
