// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  logo: {
    flex: 1,
    fontWeight: 400,
    margin: 0,

    [theme.breakpoints.down("xs")]: {
      fontWeight: 300,
      fontSize: "1em",
    },
  },
}));
