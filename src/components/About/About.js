// libs
import React, { forwardRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typography from "@material-ui/core/Typography";

// src
import Detail from "./Detail";
import { Profile } from "./Profile";
import { useStyles } from "./About.styles";

export const About = forwardRef(({ id }, ref) => {
  const styles = useStyles();

  return (
    <section id={id} className={styles.root} ref={ref}>
      <StaticImage
        alt="Muhammad Ali"
        draggable={false}
        src="../../../static/images/ma.png"
        width={60}
      />
      <Typography className={styles.tagline} component="h3" color="textPrimary">
        Fullstack developer aiming to build a brand.
      </Typography>
      <Profile />
      <Detail />
    </section>
  );
});
