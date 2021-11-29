// libs
import React from "react";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode";
import EmojiObjects from "@material-ui/icons/EmojiObjectsOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// src
import { useStyles } from "./Detail.styles";

const Detail = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={6} sm={4} md={3} className={styles.item}>
        <ChromeReaderMode className={styles.icon} />
        <Typography className={styles.title} component="h3">
          Education
        </Typography>
        <Typography className={styles.subtitle} component="h4">
          BS in Software Engineering
        </Typography>
        <Typography className={styles.content}>
          COMSATS Institute of Information Technology,
          <br /> Islamabad, Pakistan
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4} md={3} className={styles.item}>
        <BusinessCenter className={styles.icon} />
        <Typography className={styles.title} component="h3">
          Experience
        </Typography>
        <Typography className={styles.subtitle} component="h4">
          Sr. Software Engineer - Emumba
        </Typography>
        <Typography className={styles.content}>June 2017 - Present</Typography>
      </Grid>
      <Grid item xs={8} sm={4} md={3} className={styles.item}>
        <EmojiObjects className={styles.icon} />
        <Typography className={styles.title} component="h3">
          Technical Skills
        </Typography>
        <Typography className={styles.subtitle} component="h4">
          Javascript / Typescript
        </Typography>
        <Typography className={styles.content}>
          React, React Native, Redux Toolkit, Jest, NextJS, Gatsby, NodeJS,
          Formik, AgGrid, Webpack, Micro FEs
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Detail;
