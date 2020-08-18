// libs
import React, { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Typography from "@material-ui/core/Typography";

// src
import Detail from "./Detail";
import { Profile } from "./Profile";
import { useStyles } from "./About.styles";

export const About = forwardRef(({ id }, ref) => {
  const styles = useStyles();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ma.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section id={id} className={styles.root} ref={ref}>
      <Img
        alt="Muhammad Ali"
        draggable={false}
        fixed={data.file.childImageSharp.fixed}
      />
      <Typography className={styles.tagline} component="h3" color="textPrimary">
        Fullstack developer aiming to build a brand.
      </Typography>
      <Profile />
      <Detail />
    </section>
  );
});
