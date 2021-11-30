import React from "react";
import Grid from "@material-ui/core/Grid";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./Profile.module.css";

export const Profile = () => (
  <Grid container spacing={2} className={styles.root}>
    <Grid item xs={4} sm={3} md={2}>
      <StaticImage
        alt="Muhammad Ali"
        className={styles.profilePic}
        draggable={false}
        src="../../../static/images/profile.jpg"
      />
    </Grid>
    <Grid item xs={12} sm={8} md={6}>
      <p className={styles.description}>
        I was into computers since I was in high school. I thought some day I’ll
        create one of these cool games myself but it turned out I’m aligning
        some “Submit” button to the right of a form. Still, I think I’m a
        natural programmer. I don’t want to brag about it but I think I’m doing
        a great job in it. Whenever I face some problem, I’m always thinking
        about the solution. Recently I had a dream about merging two arrays
        without using a third one and I’m not kidding. I can’t stand code smell.
        Whenever I write or see some hacks in project which I’m working on I get
        horrible nightmares. My motto is:{" "}
        <span className={styles.textPrimary}>
          Always code as if the guy who ends up maintaining your code will be a
          violent psychopath who knows where you live.
        </span>
      </p>
    </Grid>
  </Grid>
);
