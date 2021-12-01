import React, { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { PROJECTS } from "./data";
import { ProjectCard } from "../ProjectCard";
import * as styles from "./Portfolio.module.css";

export const imageQuery = graphql`
  fragment imageQuery on File {
    childImageSharp {
      gatsbyImageData(height: 240)
    }
  }
`;

export const Portfolio = forwardRef(({ id }, ref) => {
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
      <h2 className={styles.title}>My Portfolio</h2>

      <div className={["marginSm", styles.content].join(" ")}>
        {PROJECTS.map((project) => {
          const { category, description, key, title, urls, video } = project;

          return (
            <ProjectCard
              key={title}
              category={category}
              description={description}
              image={data[key] ? data[key] : key}
              video={video}
              title={title}
              urls={urls}
            />
          );
        })}
      </div>

      <p className={styles.footer}>and more...</p>
    </section>
  );
});
