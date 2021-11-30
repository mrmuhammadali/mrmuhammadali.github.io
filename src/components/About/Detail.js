import React from "react";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode";
import EmojiObjects from "@material-ui/icons/EmojiObjectsOutlined";
import Grid from "@material-ui/core/Grid";

import * as styles from "./Detail.module.css";

const Detail = () => (
  <Grid container spacing={2} className={styles.root}>
    <Grid item xs={12} sm={4} md={3} className={styles.item}>
      <ChromeReaderMode className={styles.icon} />
      <h3 className={styles.title}>Education</h3>
      <h4 className={styles.subtitle}>BS in Software Engineering</h4>
      <p className={styles.content}>
        COMSATS Institute of Information Technology,
        <br /> Islamabad, Pakistan
      </p>
    </Grid>
    <Grid item xs={12} sm={4} md={3} className={styles.item}>
      <BusinessCenter className={styles.icon} />
      <h3 className={styles.title}>Experience</h3>
      <h4 className={styles.subtitle}>Sr. Software Engineer - Emumba</h4>
      <p className={styles.content}>June 2017 - Present</p>
    </Grid>
    <Grid item xs={12} sm={4} md={3} className={styles.item}>
      <EmojiObjects className={styles.icon} />
      <h3 className={styles.title}>Technical Skills</h3>
      <h4 className={styles.subtitle}>Javascript / Typescript</h4>
      <p className={styles.content}>
        React, React Native, Redux Toolkit, Jest, NextJS, Gatsby, NodeJS,
        Formik, AgGrid, Webpack, Micro FEs
      </p>
    </Grid>
  </Grid>
);

export default Detail;
