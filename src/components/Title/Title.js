// libs
import React from "react";
import Typography from "@material-ui/core/Typography";

// src
import { useStyles } from "./Title.styles";

export const Title = ({ children, className }) => {
  const styles = useStyles();

  return (
    <Typography
      className={[styles.root, className].join(" ")}
      component="h1"
      color="textPrimary"
    >
      {children}
    </Typography>
  );
};
