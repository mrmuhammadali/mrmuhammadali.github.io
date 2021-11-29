// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: "fixed",
    bottom: 5,
    right: 5,
  },

  icon: {
    fill: palette.text.secondary,
    width: "24px",
  },
}));
