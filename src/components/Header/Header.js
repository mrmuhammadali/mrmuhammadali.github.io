// libs
import React from "react";
import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

// src
import styles from "./Header.css";

export default () => (
  <AppBar className={styles.root} position="sticky" color="default">
    <Toolbar>
      <Typography className={styles.logo} variant="title" color="inherit">
        Muhammad Ali
      </Typography>
      <Button color="inherit">About</Button>
      <Button color="inherit">Portfolio</Button>
      <Button color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
);
