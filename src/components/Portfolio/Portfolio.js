// libs
import React, { forwardRef } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "@material-ui/core/Typography";

// src
import { PROJECTS } from "./data";
import { ProjectCard } from "../ProjectCard";
import { useStyles } from "./Portfolio.styles";

export const imageQuery = graphql`
  fragment imageQuery on File {
    childImageSharp {
      gatsbyImageData(height: 240)
    }
  }
`;

export const Portfolio = forwardRef(({ id }, ref) => {
  const styles = useStyles();
  const data = useStaticQuery(graphql`
    query {
      carousel: file(relativePath: { eq: "thumbs/carousel.png" }) {
        ...imageQuery
      }

      invoicer: file(relativePath: { eq: "thumbs/invoicer.png" }) {
        ...imageQuery
      }

      gitlabBot: file(relativePath: { eq: "thumbs/bot-01.jpg" }) {
        ...imageQuery
      }

      tweetIt: file(relativePath: { eq: "thumbs/bot-02.png" }) {
        ...imageQuery
      }
    }
  `);

  return (
    <section id={id} className={styles.root} ref={ref}>
      <Typography className={styles.title} component="h2" color="textPrimary">
        My Portfolio
      </Typography>
      <Grid container className={styles.content}>
        <Grid item xs={11} sm={11} md={11} lg={10}>
          <Grid container className={styles.content} spacing={5}>
            {PROJECTS.map((project) => {
              const { category, description, key, title, urls, video } =
                project;

              return (
                <Grid key={title} item xs={12} sm={6} md={4}>
                  <ProjectCard
                    category={category}
                    description={description}
                    image={data[key] ? data[key] : key}
                    video={video}
                    title={title}
                    urls={urls}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Typography color="textPrimary">and more...</Typography>
      </Box>
    </section>
  );
});
