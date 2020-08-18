// libs
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
  },

  content: {
    justifyContent: "center",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
  },

  contactHeading: {
    color: theme.palette.text.primary,
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "1em",
    textTransform: "uppercase",
    margin: 0,
  },

  email: {
    margin: "5px 0",
  },

  phone: {
    margin: 0,
    lineHeight: "28px",
    padding: 0,
    color: theme.palette.text.secondary,
  },

  social: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 40px)",
  },

  icon: {
    fill: theme.palette.text.secondary,
    width: "20px",
  },

  "@media screen and (max-width: 599px)": {
    contact: {
      alignItems: "center",
    },

    contactHeading: {
      display: "none",
    },

    social: {
      gridTemplateColumns: "repeat(6, 40px)",
    },
  },
}));
