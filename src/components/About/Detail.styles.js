// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    justifyContent: "center",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  icon: {
    fontSize: "1.5em",
    border: "1px solid",
    padding: "0.5em",
    borderRadius: "15px 0",
    color: palette.text.primary,
  },

  title: {
    fontSize: "24px",
    fontWeight: 300,
    margin: 0,
    color: palette.text.primary,
  },

  subtitle: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "1.5em",
    margin: 0,
    color: palette.text.primary,
  },

  content: {
    margin: 0,
    color: palette.text.secondary,
  },
}));
