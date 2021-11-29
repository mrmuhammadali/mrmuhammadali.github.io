// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: "32px",
    fontWeight: 300,
    lineHeight: "1.5em",
    textAlign: "center",
  },

  content: {
    justifyContent: "center",
    marginTop: '5px',
  },
}));
